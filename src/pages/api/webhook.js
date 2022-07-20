import { buffer } from "micro";
const Stripe = require('stripe');
import { updateDoc, doc} from "firebase/firestore"; 
import { projectFirestore } from '../../firebase/config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27'
});
const webhookSecret = 'whsec_84087cadd6ca8c07f5c3fb058e4413b0f015c945f11f15f1fd2212399bbbeb44';

export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req, res) => {
    console.info(`webhook`)
    if (req.method === "POST") {
        const buf = await buffer(req);
        const sig = req.headers["stripe-signature"];

        let stripeEvent;
        try {
            stripeEvent = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
        } catch (err) {
            console.error(`Webhook Error: ${err.message}`)
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        if (stripeEvent.type === 'checkout.session.completed') {
            const session = stripeEvent.data.object;
            console.info('Checkout session completed', session);
            
            // TODO - Update DB 
            const id = session.metadata.id;
            const updateProduct = async (id) => {
                const userDoc = doc(projectFirestore, "cuadros", id)
                const newUpdates = {available: false}
                await updateDoc(userDoc,newUpdates)
            };
            updateProduct(id);


        } else {
            console.warn('Stripe Event Not handle', stripeEvent.type);
        }
        res.json({ received: true });
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};

export default handler;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async(req, res) => {
  console.info(`[START] create-checkout-session`);
  const { item } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'EUR',
          product_data: {
            images: [item.image],
            name: item.name,
            metadata: {
                productSlug: item.slug,
            }
          },
          unit_amount: item.price * 100,
        },
        description: item.description,
        quantity: 1,
      }
    ],
    mode: 'payment',
    shipping_address_collection: {
        allowed_countries: ["ES"],
    },
    shipping_options: [
        {
            shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
                amount: 0,
                currency: 'EUR',
            },
            display_name: 'Gratis',
            // Delivers between 5-7 business days
            delivery_estimate: {
                minimum: {
                unit: 'business_day',
                value: 7,
                },
                maximum: {
                unit: 'business_day',
                value: 10,
                },
            }
            }
        },
        {
            shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
                amount: 1500, // precio del envío
                currency: 'EUR',
            },
            display_name: 'Envío Premium (incluye instalación)',
            // Delivers in exactly 1 business day
            delivery_estimate: {
                minimum: {
                unit: 'business_day',
                value: 3,
                },
                maximum: {
                unit: 'business_day',
                value: 5,
                },
            }
            }
        },
      ],

    phone_number_collection: {
        enabled: true,
    },
    
    success_url: "http://localhost:3000/success" ,
    cancel_url: "http://localhost:3000",
    metadata: {
      images: item.image,
      id: item.id,
    },

    expires_at: Math.floor(Date.now() / 1000) + (3600), // Configured to expire after 1h
    
  });
  console.info(`[END] create-checkout-session`);
  return res.json({ id: session.id });
};
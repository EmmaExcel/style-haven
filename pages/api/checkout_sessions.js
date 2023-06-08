const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const items = req.body.cartItem

        console.log(items)

        const transformedItems = items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [req.headers.origin + item.images],
                },
                unit_amount: item.price * 100,
            },
            quantity: 1,
        }))

        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: transformedItems,
                mode: 'payment',
                success_url: `${req.headers.origin}/?success`,
                cancel_url: `${req.headers.origin}/?canceled`,
            });
            res.json({ "sessionURL": session.url })
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
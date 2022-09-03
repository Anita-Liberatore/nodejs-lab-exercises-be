const express = require('express')
const app = express()
const port = 3000
const got = require('got')

const {
    BOAT_SERVICE_PORT = 4000,
    BRAND_SERVICE_PORT = 5000
} = process.env

const boatSrv = `http://localhost:${BOAT_SERVICE_PORT}`
const brandSrv = `http://localhost:${BRAND_SERVICE_PORT}`

app.get('/:id', async (req, res, next) => {

    const id = req.params.id

    try {
        const boat = await got(`${boatSrv}/${id}`, { timeout: 1250 }).json()
        const brand = await got(`${brandSrv}/${boat?.brand}`, { timeout: 1250 }).json()

        res.json({
            id: boat?.id,
            color: boat?.color,
            brand: brand?.name,
        })
    } catch (err) {
        if (err?.response?.statusCode === 404) {
            next()
            return
        }

        if (err?.response?.statusCode === 400) {
            const badRequest = new Error('bad request')
            badRequest.status = 400

            next(badRequest)
            return
        }

        next(err)
    }
})

app.use((_, res) => {
    res.status(404).json({ message: "not found" });
});

app.use((err, _req, res, _next) => {
    res.status(err.status ?? 500).json({
        status: err.status ?? 500,
        code: err?.code,
        message: err.message ?? "internal server error",
    });
});


app.listen(process.env?.PORT ?? 3000)

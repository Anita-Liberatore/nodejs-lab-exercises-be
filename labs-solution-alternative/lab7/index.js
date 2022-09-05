const express = require('express')
const app = express()
const port = 3000
const got = require('got')

const {
    BOAT_SERVICE_PORT,
    BRAND_SERVICE_PORT
} = process.env

const boatSrv = `http://localhost:${BOAT_SERVICE_PORT}`
const brandSrv = `http://localhost:${BRAND_SERVICE_PORT}`

app.get('/:id', async (req, res, next) => {

    const id = req.params.id

    try {
        const boat = await got(`${boatSrv}/${id}`).json()
        const brand = await got(`${brandSrv}/${boat.brand}`).json()

        return res.status(200).send({
            id: boat.id,
            brand: brand.name,
            color: boat.color,
            
        })
    } catch (err) {

        if (err?.response?.statusCode === 400) {
            const badRequest = new Error('bad request')
            badRequest.status = 400

            next(badRequest)
            return
        }

        if (err?.response?.statusCode === 404) {
            const notfound = new Error('not found')
            notfound.status = 404

            next(res.status(404).json({ message: "not found" }))
            return
        }

        next(err)
    }
})

app.use((_, res) => {
    res.status(404).json({ message: "not found" });
});

app.use((err, _req, res, _next) => {
    res.status(err.status ?? 500).json({ message: 'internal server error' })
})


app.listen(process.env?.PORT ?? 3000)

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        const status = 422;
        const msg = 'fill the form deatils properly';
        const extraDetails = error.errors[0].message;

        const err = {status,msg,extraDetails};

        console.log("validate",err);

        // res.status(400).json({msg:msg});

        next(err);
    }
};

module.exports = validate;
const handler = (err,req,res,next)=>{
    console.log(err)
    //check if the error has a custom status code
    const status  = err.statuscode || 500
    //check if the error has a message
    const message = err.message || "internal server error"
    res.status(statuscode).json({error:message})
}

module.exports = handler;
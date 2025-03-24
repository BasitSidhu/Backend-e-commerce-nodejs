const errorHandler = (err, req, res, next) => {
    console.log('err',err)
    // res.status(500).json({
    //     status:500,
    //     message:"Someyhing went wrong",
    //     error: err.message
    // })
//   const statusCode = res.statusCode ? res.statusCode : 500;
//   res.json({ message: err.message, stackTrace: err.stack });
};
export default errorHandler
import dashboardModel from "../models/dashboard.model.js";




const getAllData = async (req, res) => {

  try {
   
    const data = await dashboardModel.find() ;
   
    res.status(200).json( {result : data || []}  );

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const insertAllData = async (req, res) => {

  try {
    const json = req.body;

   
    const data = await dashboardModel.insertMany(json) ;
   
    
    res.status(200).json( {message : 'inserted successfully'}  );

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};




export {
  getAllData,
  insertAllData
};

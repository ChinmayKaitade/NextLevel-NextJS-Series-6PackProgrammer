import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      `mongodb+srv://chinmaykaitade123:6packprogrammer@cluster0.plmhavp.mongodb.net/?retryWrites=true`,{
        dbName:"NextJSPractice"
      }
    );
    console.log(`Database Connected on ${connection.host}`);
  } catch (error) {
    console.log("Error in Connection with Database", error);
  }
};

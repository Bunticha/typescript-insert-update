import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// eslint-disable-next-line max-len
admin.initializeApp(functions.config().firebase); // for intial to use firebase
export const chickenfarm = functions.https.onRequest(async (request, response) => {
    const db = admin.firestore(); // create instance for access firestore
    const dateNow = new Date();
    const dateNow2 = new Date(dateNow);
    dateNow2.setMinutes(dateNow.getMinutes() + 420);
    console.log("dateNow:" + dateNow + " / dateNow2 : " + dateNow2);

    let dataTest = request.body;

     if (dataTest.TagName == null)
     {
        dataTest = {
            CreateDate: "2021-05-25 12:00:00",
            DisplayName: "Age",
            FarmCode: "66562",
            FarmName: "Udon",
            FarmType: "Lay",
            TimeStamp: dateNow2,
            House: "House 1",
            Parameter: "Location.DayNumber",
            TagMaster: "CF_Udon_Grow.66561.House1",
            Province: "UdonThani",
            Quality: true,
            Status: "A",
            TagIndex: 1,
            TagName: "Temperature",
            UpdateDate: dateNow2,
            Value: "275",
            Unit: "°C",
            MasterTag: "N"
        };
        //response.status(200).send("TagName is Null" + request.body);
     }
     else
     {
        //response.status(200).send("TagName is not Null");
     }
    
    try {
        const TagRef = await db.collection("ChickenFarm").doc(dataTest.TagName);
        TagRef.get()
            .then(async doc => {
                if (!doc.exists) { // don't have your document in TestExample3 collection
                    console.log("ChickenFarm  ==> will be add with id");
                    await TagRef
                        .set(dataTest)
                        .then(() => { // don't hae will be insert NEW collection , So return success function
                            console.log("ChickenFarm Insert Success" + dataTest.TagName);
                            response.status(200).send(" ChickenFarm Insert Success " + dataTest.TagName);
                            response.end();
                        }).catch(err15 => { // insert NEW collection , but have some error
                            console.log("ChickenFarm Insert ==>" + err15);
                            response.status(200).send("ChickenFarm Insert ==>" + err15);
                            response.end();
                        });
                }
                else {
                    // exits your documnt will bedisplay old data
                    console.log("Show Document data and update data:", doc.data());
                    await TagRef.update({
                        TimeStamp: dataTest.TimeStamp,
                        UpdateDate: dataTest.UpdateDate,
                        Value: dataTest.Value,

                    })
                        .then(() => {
                            console.log("ChickenFarm Update Success" + dataTest.TagName);
                            response.status(200).send("ChickenFarm Update Success" + dataTest.TagName);
                            response.end();
                        }).catch(err12 => {
                            console.log("ChickenFarm Update Success" + err12);
                            response.status(500).send("ChickenFarm Update Success" + err12);
                            response.end();
                        })
                }
            })
            .catch(err6 => {
                console.log("ChickenFarm Error getting document:" + dataTest.TagName + ":", err6);
                response.status(500).send("Error ChickenFarm" + err6);
                response.end();
            });
    }
    catch (errorOut) {
        console.log("Error getting ChickenFarm catch:", errorOut);
        response.status(500).send("Error ChickenFarm Catch:" + errorOut);
        response.end();
    }

    let dataTest1 = request.body;

     if (dataTest1.TagName == null)
     {
        dataTest1 = {
            CreateDate: "2021-05-25 12:00:00",
            DisplayName: "Age",
            FarmCode: "66562",
            FarmName: "Udon",
            FarmType: "Lay",
            TimeStamp: dateNow2,
            House: "House 1",
            Parameter: "Location.DayNumber",
            TagMaster: "CF_Udon_Grow.66561.House1",
            Province: "UdonThani",
            Quality: true,
            Status: "A",
            TagIndex: 1,
            TagName: "Temperature",
            UpdateDate: dateNow2,
            Value: "275",
            Unit: "°C",
            MasterTag: "Y"
        };
        //response.status(200).send("TagName is Null" + request.body);
     }
     else
     {
        //response.status(200).send("TagName is not Null");
     }

    try {
        const ABC = ".CF"+ "_" + dataTest1.FarmName + "_" + dataTest1.FarmType + "." + dataTest1.FarmCode + "." + dataTest1.House + "." + "MASTER_TAG";
        const TagRef = await db.collection("ChickenFarm").doc(ABC);
        TagRef.get()
            .then(async doc => {
                if (!doc.exists) { // don't have your document in TestExample3 collection
                    console.log("ChickenFarm  ==> will be add with id");
                    await TagRef
                        .set(dataTest)
                        .then(() => { // don't hae will be insert NEW collection , So return success function
                            console.log("ChickenFarm Insert Success" + dataTest1.TagName);
                            response.status(200).send(" ChickenFarm Insert Success " + dataTest1.TagName);
                            response.end();
                        }).catch(err15 => { // insert NEW collection , but have some error
                            console.log("_ChickenFarm Insert ==>" + err15);
                            response.status(200).send("ChickenFarm Insert ==>" + err15);
                            response.end();
                        });
                }
                else {
                    // exits your documnt will bedisplay old data
                    console.log("Show Document data and update data:", doc.data());
                    await TagRef.update({
                        TimeStamp: dataTest1.TimeStamp,
                        UpdateDate: dataTest1.UpdateDate,
                        Value: dataTest1.Value,

                    })
                        .then(() => {
                            console.log("ChickenFarmTest Update Success" + dataTest1.TagName);
                            response.status(200).send("ChickenFarm Update Success" + dataTest1.TagName);
                            response.end();
                        }).catch(err12 => {
                            console.log("ChickenFarmTest Update Success" + err12);
                            response.status(500).send("ChickenFarm Update Success" + err12);
                            response.end();
                        })
                }
            })
            .catch(err6 => {
                console.log("ChickenFarm Error getting document:" + dataTest1.TagName + ":", err6);
                response.status(500).send("Error ChickenFarm" + err6);
                response.end();
            });
    }
    catch (errorOut) {
        console.log("_Error getting ChickenFarmTest catch:", errorOut);
        response.status(500).send("_Error ChickenFarmTest Catch:" + errorOut);
        response.end();
    }



});

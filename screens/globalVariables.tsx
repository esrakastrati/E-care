import { useEffect } from "react";
import { Auth, graphqlOperation, API } from "aws-amplify";
import React from "react";

var [patient, setPatient] = React.useState();
var [name, setName] = React.useState();
var [img, setimg] = React.useState();
var [healthDescription, sethealth] = React.useState();


useEffect(() => {

    const update = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const userData = await API.graphql(
                graphqlOperation(
                    getUser, {
                        id: userInfo.attributes.sub,
                    }
                )
            )
            setName(userData.data.getUser.patient.name);
            setimg(userData.data.getUser.patient.imageUri);

        }
        catch (e) {
            console.log(e);
        }
    }
    update();
}, []);


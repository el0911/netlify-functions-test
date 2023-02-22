const FireBase = require("../config.js")

exports.handler = async (event, context) => { /// handler
  console.log('Sending the email');
  try {
	
   const {email} = JSON.parse(event.body);

    const saveToFirebase = FireBase.firestore();
    saveToFirebase.collection("subscribers").add({
      email,
      createdAt: new Date()
    });

    return { statusCode: 200, body: JSON.stringify({ success:true }) };

  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify( { error: ' Failed fetching images ' } ),
    };
  }
};

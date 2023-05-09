const redis = require("redis");
// 连接 Redis
const client = redis.createClient({ host: "127.0.0.1", port: 6379 });

// 使用事件发射器，检测错误
client.on("error", function (error) {
    console.error(error);
});

exports.handler = async (event, context) => { /// handler
  console.log(event);

  if (event.httpMethod != 'POST'){
    return {
      statusCode: 500,
      body: JSON.stringify( { error: ' only support with post ' } ),
    };
  }
  try {
	
    const {address} = JSON.parse(event.body);
    console.log(address);
    //client.set("test-key", email);

    return { statusCode: 200, body: JSON.stringify({ success:true, address: address }) };

  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify( { error: ' Failed to save ' } ),
    };
  }
}

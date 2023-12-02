const FetchUsers = async (findUser, type) => {
  var myHeaders = new Headers();
  myHeaders.append("api-key", "123456");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    search: findUser,
    type: type,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const Users = await fetch(
    "https://ascend-server.onrender.com/api/admin/contact/getDetails",
    requestOptions
  );
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  const data = await Users.json();
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return data;
};
export default FetchUsers;

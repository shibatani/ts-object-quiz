type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
JohnSmith,17,0
MarySue,14,1
`;

//ここにコードを足す 自分の回答
const users: User[] = data
  .split(/\n/)
  .filter((v) => v)
  .map((v) => {
    const userBlock = v.split(",");
    return {
      name: userBlock[0],
      age: Number(userBlock[1]),
      premiumUser: userBlock[2] === "1"
    };
  });

//模範回答
// const users: User[] = data
//   .split(/\n/)
//   .filter((v) => v)
//   .map((v) => {
//     const [name, ageString, premiumUserString] = v.split(",");
//     return {
//       name,
//       age: Number(ageString),
//       premiumUser: premiumUserString === "1"
//     };
//   });

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(
      `${user.name}(${user.age})はプレミアムユーザーではありません。`
    );
  }
}

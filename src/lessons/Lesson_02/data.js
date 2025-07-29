//  1 способ: export переменных по отдельности
// export const animal = {
//   type: "Tiger",
//   fullName: "Marti",
//   age: 10,
//   color: "Orange Striped",
//   isPlanteater: false,
//   avatarURL:
//     "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
// };

// export const hello = "Hello, it's my first React component";

// export const getPlanteaterStatus = (isPlanteater) => {
//   if (isPlanteater) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// };
////////////////////////////////////////////////////////////////////////

// 2 способ: экспорт всех переменных в одном месте, т.е в фигурных скобках
const animal = {
  type: "Tiger",
  fullName: "Marti",
  age: 10,
  color: "Orange Striped",
  isPlanteater: false,
  avatarURL:
    "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
};

const hello = "Hello, it's my first React component";

const getPlanteaterStatus = (isPlanteater) => {
  if (isPlanteater) {
    return "Yes";
  } else {
    return "No";
  }
};

export { animal, hello };

export default getPlanteaterStatus;

import React from "react";
import HouseHoldHook from "../../hooks/residentprofiling/HouseHold";
import HouseMembersHook from "../../hooks/residentprofiling/HouseMembers";
const PopulationGraph = () => {
  const { dataHouseHold } = HouseHoldHook();
  const { dataHouseMembers } = HouseMembersHook();

  // population 2024
  const houseHeadPopulation2024 = dataHouseHold?.filter(
    (item) =>
      item.year === "2024" &&
      item.firstnamehead1 !== "" &&
      item.lastnamehead1 !== ""
  );
  const houseSpousePopulation2024 = dataHouseHold?.filter(
    (item) =>
      item.year === "2024" &&
      item.firstnamehead2 !== "" &&
      item.lastnamehead2 !== ""
  );

  const houseMembers2024 = dataHouseMembers?.filter(
    (item) => item.year === "2024"
  );

  const totalPopulation2024 =
    houseHeadPopulation2024.length +
    houseSpousePopulation2024.length +
    houseMembers2024.length;
  // population 2025
  const houseHeadPopulation2025 = dataHouseHold?.filter(
    (item) =>
      item.year === "2025" &&
      item.firstnamehead1 !== "" &&
      item.lastnamehead1 !== ""
  );
  const houseSpousePopulation2025 = dataHouseHold?.filter(
    (item) =>
      item.year === "2025" &&
      item.firstnamehead2 !== "" &&
      item.lastnamehead2 !== ""
  );

  const houseMembers2025 = dataHouseMembers?.filter(
    (item) => item.year === "2025"
  );

  const totalPopulation2025 =
    houseHeadPopulation2025.length +
    houseSpousePopulation2025.length +
    houseMembers2025.length;

  // population 2026
  const houseHeadPopulation2026 = dataHouseHold?.filter(
    (item) =>
      item.year === "2026" &&
      item.firstnamehead1 !== "" &&
      item.lastnamehead1 !== ""
  );
  const houseSpousePopulation2026 = dataHouseHold?.filter(
    (item) =>
      item.year === "2026" &&
      item.firstnamehead2 !== "" &&
      item.lastnamehead2 !== ""
  );

  const houseMembers2026 = dataHouseMembers?.filter(
    (item) => item.year === "2026"
  );

  const totalPopulation2026 =
    houseHeadPopulation2026.length +
    houseSpousePopulation2026.length +
    houseMembers2026.length;

  // population 2027
  const houseHeadPopulation2027 = dataHouseHold?.filter(
    (item) =>
      item.year === "2027" &&
      item.firstnamehead1 !== "" &&
      item.lastnamehead1 !== ""
  );
  const houseSpousePopulation2027 = dataHouseHold?.filter(
    (item) =>
      item.year === "2027" &&
      item.firstnamehead2 !== "" &&
      item.lastnamehead2 !== ""
  );

  const houseMembers2027 = dataHouseMembers?.filter(
    (item) => item.year === "2027"
  );

  const totalPopulation2027 =
    houseHeadPopulation2027.length +
    houseSpousePopulation2027.length +
    houseMembers2027.length;

  // population 2028
  const houseHeadPopulation2028 = dataHouseHold?.filter(
    (item) =>
      item.year === "2028" &&
      item.firstnamehead1 !== "" &&
      item.lastnamehead1 !== ""
  );
  const houseSpousePopulation2028 = dataHouseHold?.filter(
    (item) =>
      item.year === "2028" &&
      item.firstnamehead2 !== "" &&
      item.lastnamehead2 !== ""
  );

  const houseMembers2028 = dataHouseMembers?.filter(
    (item) => item.year === "2028"
  );

  const totalPopulation2028 =
    houseHeadPopulation2028.length +
    houseSpousePopulation2028.length +
    houseMembers2028.length;

  // population total all
  const houseSpousePopulation = dataHouseHold?.filter(
    (item) => item.firstnamehead2 !== ""
  );

  const totalPopulation =
    dataHouseHold.length +
    dataHouseMembers.length +
    houseSpousePopulation.length;

  //population gender

  //male household
  const maleHead1 = dataHouseHold?.filter((item) => item.genderhead1 == "male");
  const maleHead2 = dataHouseHold?.filter((item) => item.genderhead2 == "male");
  const malemembers = dataHouseMembers?.filter((item) => item.gender == "male");
  //female household
  const femaleHead1 = dataHouseHold?.filter(
    (item) => item.genderhead1 == "female"
  );

  const femaleHead2 = dataHouseHold?.filter(
    (item) => item.genderhead2 == "female"
  );
  const femaleMembers = dataHouseMembers?.filter(
    (item) => item.gender == "female"
  );

  //lgbtq
  const lgbtqHead1 = dataHouseHold?.filter(
    (item) => item.genderhead1 == "lgbtq"
  );

  const lgbtqHead2 = dataHouseHold?.filter(
    (item) => item.genderhead2 == "lgbtq"
  );
  const lgbtqMembers = dataHouseMembers?.filter(
    (item) => item.gender == "lgbtq"
  );

  //total

  const totalFemale =
    femaleHead1.length + femaleHead2.length + femaleMembers.length;
  const totalMale = maleHead1.length + maleHead2.length + malemembers.length;

  const totalLgbtq =
    lgbtqHead1.length + lgbtqHead2.length + lgbtqMembers.length;

  // Out of School Youths
  const outOfSchoolYouths = dataHouseMembers?.filter(
    (item) => item.highesteducation == "yes"
  );
  // age below 18
  const below18head1 = dataHouseHold?.filter(
    (item) =>
      item.firstnamehead1 !== "" &&
      item.lastnamehead1 !== "" &&
      Number(item.agehead1) < 18
  );

  const below18head2 = dataHouseHold?.filter(
    (item) =>
      item.firstnamehead2 !== "" &&
      item.lastnamehead2 !== "" &&
      Number(item.agehead2) < 18
  );

  const below18members = dataHouseMembers?.filter(
    (item) => item.fullname !== "" && Number(item.age) < 18
  );

  const total18below =
    below18head1.length + below18head2.length + below18members.length;

  // age above 18
  const above18head1 = dataHouseHold?.filter(
    (item) =>
      item.firstnamehead1 !== "" &&
      item.lastnamehead1 !== "" &&
      Number(item.agehead1) >= 18
  );

  const above18head2 = dataHouseHold?.filter(
    (item) =>
      item.firstnamehead2 !== "" &&
      item.lastnamehead2 !== "" &&
      Number(item.agehead2) >= 18
  );

  const above18members = dataHouseMembers?.filter(
    (item) => item.fullname !== "" && Number(item.age) >= 18
  );

  const totalabove18 =
    above18head1.length + above18head2.length + above18members.length;

  const totalOutOfSchoolYouths = outOfSchoolYouths.length;

  //senior

  const seniorHead1 = dataHouseHold?.filter(
    (item) =>
      item.firstnamehead1 !== "" &&
      item.lastnamehead1 !== "" &&
      Number(item.agehead1) >= 60
  );

  const seniorHead2 = dataHouseHold?.filter(
    (item) =>
      item.firstnamehead2 !== "" &&
      item.lastnamehead2 !== "" &&
      Number(item.agehead2) >= 60
  );
  const seniorMembers = dataHouseMembers?.filter(
    (item) => item.fullname !== "" && Number(item.age) >= 60
  );

  const totalSenior =
    seniorHead1.length + seniorHead2.length + seniorMembers.length;
  return {
    totalPopulation2024,
    totalPopulation2025,
    totalPopulation2026,
    totalPopulation2027,
    totalPopulation2028,
    totalPopulation,
    totalFemale,
    totalMale,
    totalLgbtq,
    totalOutOfSchoolYouths,
    total18below,
    totalabove18,
    totalSenior,
  };
};

export default PopulationGraph;

var b = {
  accountOrPrefix: "accountOrPrefix",
  statusId: "1234",
  usage: {
    eventId: "eventId",
    additoinalAttributes: {
      group: "group1",
      kind: "kind1",
    },
    measuredusage: [
      {
        metricId: "MID_1",
        additionalAttributes: {
          group: "group12",
          kind: "kind12",
        },
      },
      {
        metricId: "MID_1",
        additionalAttributes: {
          group: "group12",
          kind: "kind12",
        },
      },
      {
        metricId: "MID_2",
        additionalAttributes: {
          group: "group1",
          kind: "kind1",
        },
      },
      {
        metricId: "MID_2",
        additionalAttributes: {},
      },
    ],
  },
};

var oArr = [];
var temp = {
  accountOrPrefix: b.accountOrPrefix,
  statusId: b.statusId,
  usage: {
    eventId: b.usage.eventId,
    additoinalAttributes: {
      group: "",
      kind: "",
    },
    measuredusage: [],
  },
};
let orders = b.usage.measuredusage;
var O_Obj = {};
var arr = orders.map((obj) => {
  if (Object.keys(O_Obj).includes(obj.metricId)) {
  } else {
    O_Obj[obj.metricId] = {};
  }
  console.log("here 0 " + JSON.stringify(O_Obj));

  let key = obj.additionalAttributes.group + obj.additionalAttributes.kind;

  if (key) {
    if (Object.keys(O_Obj[obj.metricId]).includes(key)) {
    } else {
      O_Obj[obj.metricId][key] = [];
    }
    O_Obj[obj.metricId][key].push(obj);
    console.log("here 01 ");
    console.table(O_Obj);
  } else {
    let tempKey = obj.metricId + "_noGroup";
    if (!Object.keys(O_Obj[obj.metricId]).includes(tempKey))
      O_Obj[obj.metricId][tempKey] = [];
    O_Obj[obj.metricId][tempKey].push(obj);
  }
});

let oObj = {};

console.log("______________");
console.log(JSON.stringify(O_Obj));
for (const key in O_Obj) {
  for (const key1 in O_Obj[key]) {
    console.log(O_Obj[key][key1]);
    // oObj = { ...temp };
    // oObj = Object.create(temp);
    oObj = JSON.parse(JSON.stringify(temp));

    console.log("here 05" + JSON.stringify(oObj));

    oObj.usage.measuredusage = O_Obj[key][key1];

    oObj.usage.additoinalAttributes.group =
      O_Obj[key][key1][0]?.additoinalAttributes?.group;

    oObj.usage.additoinalAttributes.kind =
      O_Obj[key][key1][0]?.additoinalAttributes?.kind;

    console.log("here03" + JSON.stringify(oObj));

    oArr.push(oObj);
  }
}

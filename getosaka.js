#! /usr/bin/env node

const fs = require("fs");
fs.readFile("./covid19osaka/data/data.json",{ encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err);
  } else {
    var obj = JSON.parse( file );
    var d       = obj.lastUpdate;
    var taiin   = obj.main_summary.children[0].children[1].value;             // 退院
    var shibou  = obj.main_summary.children[0].children[2].value;             // 死亡
    var jyuu    = obj.main_summary.children[0].children[0].children[1].value; // 入院・重症

    var kei     = obj.main_summary.children[0].children[0].value              // 入院／調整中
                - obj.main_summary.children[0].children[0].children[1].value  // 入院・重症
                + obj.main_summary.children[0].children[3].value              // 自宅療養
                + obj.main_summary.children[0].children[4].value              // 宿泊療養
                + obj.main_summary.children[0].children[5].value              // 療養等調整中
                + obj.main_summary.children[0].children[6].value              // 入院調整中
                + obj.main_summary.children[0].children[7].value;             // 符外健康観察
    console.log( "\"" + d + "\"" + ", "
                  + kei + ", "
                  + jyuu + ", "
                  + shibou + ", "
                  + taiin );
  }
});


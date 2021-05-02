#! /usr/bin/env node

const fs = require("fs");
fs.readFile("./data.json",{ encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err);
  } else {
    var obj = JSON.parse( file );
    var d       = obj.lastUpdate;
                                                                    // 入院・軽症
    var kei     = obj.main_summary.children[0].children[0].children[0].value;
                                                                    // 入院・重症
    var jyuu    = obj.main_summary.children[0].children[0].children[1].value;
    var fumei   = obj.main_summary.children[0].children[3].value    // 自宅療養
                + obj.main_summary.children[0].children[4].value    // 宿泊療養
                + obj.main_summary.children[0].children[5].value    // 療養等調整中
                + obj.main_summary.children[0].children[6].value    // 入院調整中
                + obj.main_summary.children[0].children[7].value;   // 府外健康観察
    var shibou  = obj.main_summary.children[0].children[2].value;   // 死亡
    var taiin   = obj.main_summary.children[0].children[1].value;   // 退院
    console.log( "\"" + d + "\"" + ", "
                  + kei + ", "
                  + fumei + ", "
                  + jyuu + ",, "
                  + shibou + ", "
                  + taiin );
  }
});


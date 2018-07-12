/**
 * Created by Kusunoki on 2017/05/04.
 */


function customConvertion(syori, block_num) {
    var old_textdata = document.getElementById(String(block_num)).value;
    var old_regexp_text = document.getElementById("targetRegularionText"+String(block_num)).value;
    var old_regexp = new RegExp(old_regexp_text, 'g'); // g -> global match 全てのマッチを検索

    var new_chara = document.getElementById("new_chara"+String(block_num)).value;
    if(new_chara == "\\n") new_chara = '\n'; //textデータの\nはプログラム上では\\nで扱っている

    var insert_separator = document.getElementById("insertSeparator"+String(block_num)).value;
    if(insert_separator == "\\n") insert_separator = '\n'; //textデータの\nはプログラム上では\\nで扱っている

    var insert_timing = parseInt(document.getElementById("insertTiming"+String(block_num)).value);
    var new_textdata = "";
    if(syori == 0)
    {
        //replace のメイン処理
        new_textdata = old_textdata.replace(old_regexp, new_chara);
    }
    else if(syori == 1)
    {
        //split and insert separator のメイン処理
        var arrayOfStrings = old_textdata.split(old_regexp);
        console.log(arrayOfStrings);
        for (var i = 0; i < arrayOfStrings.length; i++) {
            new_textdata += arrayOfStrings[i];

            // 次の要素がある時はセパレータを追加
            if ((i + 1 < arrayOfStrings.length) == true) {
                new_textdata += new_chara;
                if (((i + 1) % insert_timing) == 0) {
                    //iは0から始まるから、「何回目？」の値はiに1足したもの
                    new_textdata += insert_separator;
                }
            }
        }
    }
    document.getElementById(String(block_num + 1)).innerText = new_textdata;
}

function customSplitInsert0() {
    var old_textdata = document.getElementById("0").value;
    var old_regexp_text = document.getElementById("targetRegularionText0").value;
    var old_regexp = new RegExp(old_regexp_text, 'g'); // g -> global match 全てのマッチを検索

    var new_chara = document.getElementById("new_chara0").value;

    var insert_separator = document.getElementById("insertSeparator0").value;
    if(insert_separator == "\\n") insert_separator = '\n'; //textデータの\nはプログラム上では\\nで扱っている

    var insert_timing = parseInt(document.getElementById("insertTiming0").value);
    var new_textdata = "";
    //split and insert separator のメイン処理
    var arrayOfStrings = old_textdata.split(old_regexp);
    console.log(arrayOfStrings);
    for (var i = 0; i < arrayOfStrings.length; i++)
    {
        new_textdata += arrayOfStrings[i];

        // 次の要素がある時はセパレータを追加
        if ((i+1 < arrayOfStrings.length) == true)
        {
            new_textdata += new_chara;
            if ( ((i+1) % insert_timing) == 0){
                //iは0から始まるから、「何回目？」の値はiに1足したもの
                new_textdata += insert_separator;
            }
        }
    }
    document.getElementById("1").innerText = new_textdata;
}
function customReplace1() {
    var textdata = document.getElementById("1").value;

    var target_regexp_text = document.getElementById("targetRegularionText2").value;

    var goal_text = document.getElementById("goalText2").value;

    var target_regexp = new RegExp(target_regexp_text, 'g'); // g -> global match 全てのマッチを検索
    textdata = textdata.replace(target_regexp, goal_text);
    document.getElementById("2").innerText = textdata;
}
function customReplace2() {
    var textdata = document.getElementById("1").value;
    var target_regexp_text = document.getElementById("targetRegularionText2").value;
    var goal_text = document.getElementById("goalText2").value;

    var target_regexp = new RegExp(target_regexp_text, 'g'); // g -> global match 全てのマッチを検索
    textdata = textdata.replace(target_regexp, goal_text);
    document.getElementById("3").innerText = textdata;
}



onload = function () {
};
$(document).ready(function(){
    // ここに処理を記述します
    var setting_height = $('.settings').css('height');
    $('.resulttext').css({
        'height':setting_height
    });
});
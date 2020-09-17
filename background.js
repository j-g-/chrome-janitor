times = 0
function runGC(){
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach( t => {
            if(t.url.match(/https?/)){
                console.log("Running gc on site: " + t.url);
                chrome.tabs.executeScript(t.id, {code:"window.gc(); console.log('ran gc')"});

            }
        })
    });
    gc();
    times++;
    console.log("Completed Ran GC " + times + " times")
}
setInterval(runGC, 120*1000)
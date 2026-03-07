var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const port = "8080";
const host = "localhost";
app.use(express.static("public"));
    app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});

app.get("/json", (req, res) => {
    fs.readFile(__dirname + "/" + "lastVisitedPages.json", "utf8", (err, data) => {
    res.status(200);
    res.send(data)
    });
});


app.get("/list", (req, res) => {
    fs.readFile(__dirname + "/" + "list.json", "utf8", (err, data) => {
    res.status(200);
    res.send(data)
    });
});


app.post("/write", async (req, res) => {
    const id = req.body.index;
    const name = req.body.name;
    const system =req.body.system;
    fs.readFile("lastVisitedPages.json",function(err,data){
        if(err) throw err;
        let visitedPages = JSON.parse(data);
        let check = JSON.stringify(visitedPages);
        if(check.includes(id)){
            let index = visitedPages.pages.findIndex(page => page.index === id);
            visitedPages.pages.splice(index,1);
        }
            let visitedList={
                name:`${name}`,
                index:`${id}`,
                system:`${system}`
            }
           visitedPages.pages.unshift(visitedList)
            if(visitedPages.pages.length>10){
                visitedPages.pages.pop();
            }
            res.status(200);
            fs.writeFile(
                "lastVisitedPages.json",JSON.stringify(visitedPages, null,2),
                err=>{
                    if(err) throw err;
                });
        });
});

app.delete("/deleteEntry/:entry",async(req,res)=>{
    let id = req.params.entry;
    fs.readFile("list.json",function(err,data){
        let list = JSON.parse(data);
        list.NPCs.splice(id,1);
        fs.writeFile(
                "list.json",JSON.stringify(list, null,2),
                err=>{
                    if(err) throw err;
                });
//        let index = list.NPCs.findIndex(page => page.index === id);
    });

    fs.readFile("lastVisitedPages.json",function(err,data){
        let visited = JSON.parse(data);
        let length = visited.pages.length-1;
        let page = visited.pages;
        let toDelete = visited.pages.findIndex(page => page.index === id);
        visited.pages.splice(toDelete,1);

        for(let i=0;i<length;i++){
            if(Number(page[i].index)>Number(id)){
                page[i].index = (page[i].index-1).toString();
            }
        }
        fs.writeFile(
                "lastVisitedPages.json",JSON.stringify(visited, null,2),
                err=>{
                    if(err) throw err;
                });

    });
    // list.NPCs.forEach(element => {
    //         console.log(element);
    //     });
    // console.log("list2 " +visited.pages[5].index);
});
app.post("/create", async (req, res) => {
    fs.readFile("list.json",function(err,data){
        let list = JSON.parse(data);
        list.NPCs.push(req.body);
        fs.writeFile(
                "list.json",JSON.stringify(list, null,2),
                err=>{
                    if(err) throw err;
                });
//        let index = list.NPCs.findIndex(page => page.index === id);
    });
    console.log("finished");
})

app.put("/update/:id",async(req,res)=>{
    let id = Number(req.params.id);
fs.readFile("list.json",function(err,data){
    let list = JSON.parse(data);
    list.NPCs[id]=req.body;
    fs.writeFile(
                "list.json",JSON.stringify(list, null,2),
                err=>{
                    if(err) throw err;
                });
    // list.NPCs.splice(id,1);
    // fs.writeFile(
    //         "list.json",JSON.stringify(list, null,2),
    //         err=>{
    //             if(err) throw err;
    //         });
//        let index = list.NPCs.findIndex(page => page.index === id);
});

})
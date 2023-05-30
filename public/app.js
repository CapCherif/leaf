

test  = {
    "LR1":{
        "id":1,
        "gene_id":"EF439840.1",
        "name":"LR1",
        "size":"5493",
        "species":"Triticum aestivum",
        "disease":"Leaf rust"
    },
    "LR10":{
        "id":2,
        "gene_id":"GU393292.1",
        "name":"LR10",
        "size":"3919",
        "species":"Triticum turgidum subsp.",
        "disease":"Leaf rust"
    },
    "LR13":{
        "id":3,
        "gene_id":"MW656173.1",
        "name":"LR13",
        "size":"23198",
        "species":"Triticum aestivum",
        "disease":"Leaf rust"
    },
}


document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    var val = document.querySelector("input").value
    if(val.trim().length == 0){
        document.querySelector('input').style.border = "1px solid red"
        setTimeout(() => {
            document.querySelector('input').style.border = "1px solid gray"
        }, 3000);
    }

    else{
        var keys = Object.keys(test)
        var res = []
        var t = ""
        keys.forEach((key)=>{
            if(key.toLowerCase().indexOf(val.toLowerCase()) != -1){
                res.push(key)
                t += `
                <div class="res">
                    <div class="ble">
                        <h4><a href="/detail?id=${test[key].id}">${test[key].name}</a></h4>
                        <small>${test[key].gene_id}</small>
                    </div>
                </div>
                `
            }
        })

        if(res.length != 0){
            document.querySelector('#res').innerHTML = t;

        }
        else{
        document.querySelector('#res').innerHTML = "<p>No Search yet.</p>";

        }
    }
})
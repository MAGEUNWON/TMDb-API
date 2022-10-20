const root = document.getElementById("root");
    console.log(root);


    class ApiData{
      constructor(rank, title, openDt){
        this.rank = rank;
        this.title =title;
        this.openDt = openDt;
      }
    }

    function movie (){
        const api_KEY = '7204O8KH4D5547Q3JBB7';
        const title = '공조';
        const api_URL = ` https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${api_KEY}&detail=Y&query=${title}`;
        const request = new XMLHttpRequest();
        request.open("GET", api_URL);
        request.responseType = "json";
        request.send();
        request.addEventListener("load", ()=>{    
          const data = request.response;
          console.dir(data);
          const posterData = data.Data[0].Result[0].posters
          // console.log(typeof(poster));
          const arr = posterData.split('|');
          // console.log(Array.isArray(arr));
          // console.log(arr[0]);
          const poster = arr[0];
          console.log(arr[0]);
        });
        
    }
    movie();
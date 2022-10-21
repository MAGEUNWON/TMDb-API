
    const root = document.getElementById("root");
    console.log(root);


    class ApiData{
      constructor(rank, title, openDt){
        this.rank = rank;
        this.title =title;
        this.openDt = openDt;
      }
    }

    function movie (targetDt){
      let totalData = [];
        const api_KEY = '19d2a86ba729ecb37eccaba04437d50b';
        // const targetDt = '20221019';
        const api_URL = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${api_KEY}&targetDt=${targetDt}&itemPerPage=10`;
        const request = new XMLHttpRequest();
        request.open("GET", api_URL);
        request.responseType = "json";
        request.send();
        request.addEventListener("load", ()=>{    
          const data = request.response;
          // console.log(data);
        
          const List = data.boxOfficeResult.dailyBoxOfficeList;
          console.log(List);


          // for(let i = 0; i<0; i++){
          //   class ApiData{
          //     constructor(rank, title, openDt){
          //       this.rank = rank;
          //       this.title =title;
          //       this.openDt = openDt;
          //     }
          //   }
            // let setObj = {
            //   id : List[i].rank,
            //   title : List[i].movieNm,
            //   openDt : List[i].openDt
            // }
        
          //   let tempObject = new ApiData(rank[i], title[i], openDt[i]);
          //   console.log(tempObject);
          // }
          

          // 글 나오게 할거면 이거 다시 풀기↓
          List.forEach((value)=>{
            totalData.push(new ApiData(value.rank,value.movieNm,value.openDt));
          })
          
          // totalData.push(tempObject);
          // console.log(totalData);

          // 얘도 같이 풀기↓
          let ul = document.createElement('ul');
          ul.textContent = '일별 박스오피스 순위';
          totalData.forEach(value=>{
            let li = document.createElement('li');
            console.log(value.title);
            li.textContent =`이번주 박스오피스 ${value.rank}위는 ${value.openDt}에 개봉한 ${value.title}입니다.`;
            ul.appendChild(li);
          })
          root.appendChild(ul);

        });
        
    }
    movie(20221020);


    function title (){
      let totalData = [];
        const api_KEY = '19d2a86ba729ecb37eccaba04437d50b';
        const targetDt = '20221019';
        const api_URL = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${api_KEY}&curPage="10"&openStartDt=2022`;
        const request = new XMLHttpRequest();
        request.open("GET", api_URL);
        request.responseType = "json";
        request.send();
        request.addEventListener("load", ()=>{    
          const data = request.response;
          console.log(data);
        
          // const List = data.boxOfficeResult.dailyBoxOfficeList;
        //   console.log(List);
        });
    }

    // title()
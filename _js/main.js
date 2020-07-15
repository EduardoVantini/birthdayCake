const birthday = {
    today: new Date(),
    cake: function(birthday) {

        let birthdayISO = `${birthday.substring(6, 10)}-${birthday.substring(3, 5)}-${birthday.substring(0, 2)}`


        birthday = new Date(`${birthdayISO}T12:00:00-02:00`)

        let birthday_day = birthday.getDate()
        let birthday_month = birthday.getMonth() + 1

        let today_day = this.today.getDate()
        let today_month = this.today.getMonth() + 1

        return `${birthday_day}${birthday_month}` == `${today_day}${today_month}` ? true:false
    },
    birthdayList: function() {
        json_dados = JSON.parse('{"content":[{"name":"Jonas","birthday":"10/07/1987"},'
            + '{"name":"Marta","birthday":"11/07/1988"},'
            + '{"name":"Joao","birthday": "15/07/1999"},'
            + '{"name":"Maria","birthday":"12/07/1987"},'
            + '{"name":"Jose","birthday":"28/07/1991"},'
            + '{"name":"Alice","birthday":"18/07/2000"}'
            +']}'
        )


        arr_dados = new Array(json_dados.content)


        for (i = 0; i < arr_dados[0].length; i++) {

/*             $("#tblBirthday > tbody").append("<tr id='row_" + i + "'></tr>")

            $("#row_" + i).append("<td>" + arr_dados[0][i].name + "</td>")
            $("#row_" + i).append("<td>" + arr_dados[0][i].birthday + "</td>")

            this.cake(arr_dados[0][i].birthday) == true ? $("#row_" + i).append("<td><img src='_img/cake.png' ></td>"):$("#row_" + i).append("<td></td>") */

            var tr = document.createElement("tr")
            tr.id = "row_" + i
            document.getElementById("tbody").appendChild(tr);

            var tdName = document.createElement("td")
            tdName.id = "name_" + i
            document.getElementById("row_" + i).appendChild(tdName);

            var tdDate = document.createElement("td")
            tdDate.id = "date_" + i
            document.getElementById("row_" + i).appendChild(tdDate);

            var tdCake = document.createElement("td")
            tdCake.id = "cake_" + i
            document.getElementById("row_" + i).appendChild(tdCake);


            document.getElementById("name_" + i).innerHTML =  arr_dados[0][i].name
            document.getElementById("date_" + i).innerHTML =  arr_dados[0][i].birthday



            this.cake(arr_dados[0][i].birthday) == true ? document.getElementById("cake_" + i).innerHTML = "<td><img src='_img/cake.png' ></td>":document.getElementById("cake_" + i).innerHTML = "<td></td>"        
        }
    }
}
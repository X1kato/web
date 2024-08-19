
//expressを読み込み
const express = require('express');

//expresssを使用するための準備
const app = express();

app.use('/home', express.static('link_test'))

//MySQLを使うためのインストールしたmysqlを呼び出す
const mysql = require('mysql');

//フォームの値を受け取るために必要な典型文
app.use(express.urlencoded({extended: false}));

// publicディレクトリを静的ファイルのルートディレクトリとして指定
app.use(express.static('public'));

// ルートパスへのアクセスをindex.htmlにマッピング
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


const dbConfig = require('./kato');

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

//データベースから取得したデータをget_ticket.ejsに表示
//localhost:3000/get_ticket
app.get('/get_ticket', (req, res) => {
  connection.query(
    'SELECT * FROM ticket',
    (error, results) => {
      //クエリ実行後の処理（アロー関数で）を記述
      res.render('get_ticket.ejs',{ticketTable:results});
    }
  );
});

//t_index.htmlakで入力した情報をデータベースに追加し、get_ticket.ejsページに遷移する記述
app.post('/get_ticket', (req, res) => {

  //ticketテーブルから一番値が大きいIdを取得
  connection.query(
    'SELECT MAX(id) AS max_id FROM ticket',
    (error, results) => {
      if (error) throw error;
      const maxId = results[0].max_id;
      //取得したidに+1
      Id = maxId +1;

      //新しく生成したidと、t_index.ejsで入力した情報をticketテーブルに追加
      connection.query(
        'INSERT INTO ticket(id, last_name, first_name, birthday, tel_number, mail, appointment_date, adult_ticket, child_ticket) VALUES(?,?,?,?,?,?,?,?,?)',
        [Id,req.body.LastName, req.body.FirstName, req.body.Birthday, req.body.TelNumber, req.body.Email, req.body.AppointmentDate, req.body.AdultTicket, req.body.ChildTicket],
  
        (error,results)=>{
          //値を追加した状態で、再度データベースの最新の情報を取得し、get_ticket.ejsに表示させる。
          connection.query(
            'SELECT * FROM ticket ORDER BY id DESC LIMIT 1',
            (error, results) => {
              res.render('get_ticket.ejs',{ticketTable:results});
            }
          );
        }
      )
    }
  )
});



//「localhost:3000」にアクセスすると「index.ejs」が表示される。
// app.get('/', (req, res) => {
//   //res.render(”表示させるページ”)
//   res.render('index.ejs');
// });


//「localhost:3000/test」にアクセスすると「test.ejs」が表示される。
app.get('/test', (req, res) => {
    res.render('test.ejs');
});


//SQL文でticketテーブルからすべてのデータ（*は全てのデータ）を取得する命令文
// connection.query(
//     'SELECT * FROM ticket',
//     (error, results) => {
//       console.log(error);
//       console.log(results);
//     }
//   );


//データベースから取得したデータをtop.ejsに表示
app.get('/top', (req, res) => {
  connection.query(
    'SELECT * FROM member',
    (error, results) => {
      res.render('top.ejs',{memberTable:results});
    }
  );
});


//testejsから値をデータベースに追加し、top.ejsのページに遷移する記述
app.post('/top', (req, res) => {

  //memberテーブルから一番値が大きいIdを取得
  connection.query(
    'SELECT MAX(id) AS max_id FROM member',
    (error, results) => {
      if (error) throw error;
      const maxId = results[0].max_id;
      //取得したidに+1
      Id = maxId +1;

      //新しく生成したidと、test.ejsで入力した情報をmemberテーブルに追加
      connection.query(
        'INSERT INTO member(id, last_name, first_name, class) VALUES(?,?,?,?)',
        [Id, req.body.LastName, req.body.FirstName, req.body.Class],
  
        (error,results)=>{
          //値を追加した状態で、再度データベースの情報を取得し、top.ejsを画面に表示させる。
          connection.query(
            'SELECT * FROM member',
            (error, results) => {
              res.render('top.ejs',{memberTable:results});
            }
          );
        }
      )
    }
  )
});

//「localhost:3000/home」にアクセスすると「home.ejs」が表示される。
app.get('/home', (req, res) => {
    res.render('home.ejs');
});






app.listen(3000);



  
  


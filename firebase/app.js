db.collection('TodoList').get().then((snapshot) => {
            //data vako bela
            console.log(snapshot)
        }).catch(err => {
            console.log(err);
        })
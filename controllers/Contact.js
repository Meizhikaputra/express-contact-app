const contact = 
    (req, res) => {
        res.render('index', {
            layout: 'layouts/main-layout',
            title : 'Halaman Home'
        });
    }


module.exports= contact;
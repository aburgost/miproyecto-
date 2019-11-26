const express = require('express');
const path = require ('path')
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'index.html'))

});

app.get('/index.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'index.html'))

});

app.get('/index2.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'index2.html'))

});

app.get('/pages/layout/top-nav.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/layout/top-nav.html'))

});

app.get('/pages/layout/top-nav.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/layout/top-nav.html'))

});

app.get('/pages/layout/boxed.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/pages/layout/boxed.html'))

  });
  
app.get('/pages/layout/fixed.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/layout/fixed.html'))
  });
app.get('/pages/layout/collapsed-sidebar.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/layout/collapsed-sidebar.html'))
  });
 app.get('/pages/widgets.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/widgets.html'))
});
 app.get('/pages/charts/chartjs.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/charts/chartjs.html'))
 });
 app.get('/pages/charts/morris.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/charts/morris.html'))
});
 app.get('/pages/charts/flot.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/charts/flot.html'))
    });
 app.get('/pages/charts/inline.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/charts/inline.html'))
    });
 app.get('/pages/UI/general.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/UI/general.html'))
    });
 app.get('/pages/UI/icons.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/UI/icons.html'))
    });
 app.get('/pages/UI/buttons.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/UI/buttons.html'))
    });
 app.get('/pages/UI/sliders.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/UI/sliders.html'))
    });
 app.get('/pages/UI/timeline.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/UI/timeline.html'))
    });
 app.get('/pages/UI/modals.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/UI/modals.html'))
    });
 app.get('/pages/forms/general.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/forms/general.html'))
    });

 app.get('/pages/forms/advanced.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/forms/advanced.html'))
    });
 app.get('/pages/forms/editors.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/forms/editors.html'))
    });
 app.get('/pages/tables/simple.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/tables/simple.html'))
    });
 app.get('/pages/tables/data.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/tables/data.html'))
    });
 app.get('/pages/calendar.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/calendar.html'))
    });
 app.get('/pages/mailbox/mailbox.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/mailbox/mailbox.html'))
    });
 app.get('/pages/examples/invoice.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/examples/invoice.html'))
    });
 app.get('/examples/profile.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'examples/profile.html'))
    });
 app.get('/pages/examples/login.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/examples/login.html'))
    });
 app.get('/pages/examples/register.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/examples/register.html'))
    });
 app.get('/examples/lockscreen.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'examples/lockscreen.html'))
    });
 app.get('/pages/examples/404.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/examples/404.html'))
    });
 app.get('/pages/examples/500.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/examples/500.html'))
    });
 app.get('/pages/examples/blank.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/examples/blank.html'))
  
    });
 app.get('/pages/examples/pace.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'pages/examples/pace.html'))
    });
 app.get('/documentation/index.html', 
function(request, response){
    response.sendFile(path.resolve(__dirname, 'documentation/index.html'))
    });
var server = app.listen(3000,
    function(){
     console.log('Server Is Ready!--> localhost:3000')   
    });
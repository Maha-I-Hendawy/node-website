const http = require('http'); 

const fs = require('fs'); 

const url = require('url');





const home = 'templates/home.html';
const about = 'templates/about.html';
const services = 'templates/services.html';
const products = 'templates/products.html';
const contactus = 'templates/contactus.html';
const pagenotfound = 'templates/pagenotfound.html';







const server = http.createServer((req, res) => {

	if (req.url === '/'){

		fs.readFile(home, (err, html) => {

			if(err){

				throw err;
			}
			else {

				res.writeHead(200, {'Content-Type': 'text/html'});
			    res.write(html);
			    res.end();
			}


		})
	}
	else if (req.url === '/about'){

		fs.readFile(about, (err, html) => {

			if (err){

				throw err;
			}
			else {

				res.writeHead(200, {'Content-Type': 'text/html'});
			    res.write(html);
			    res.end();
			}
		})
	}
	else if(req.url === '/services'){

		fs.readFile(services, (err, html) => {

			if(err){

				throw err;
			}
			else {

				res.writeHead(200, {'Content-Type': 'text/html'});
			    res.write(html);
			    res.end();
			}
		})
	}
	else if(req.url === '/products'){

		fs.readFile(products, (err, html) => {

			if(err){

				throw err;
			}
			else {

				res.writeHead(200, {'Content-Type': 'text/html'});
			    res.write(html);
			    res.end();
			}
		})
	}
	else if(req.url === '/contactus'){

		fs.readFile(contactus, (err, html) => {

			if(err){

				throw err;
			}
			else {

				res.writeHead(200, {'Content-Type': 'text/html'});
			    res.write(html);
			    res.end();
			}
		})
	}
	else {

		fs.readFile(pagenotfound, (err, html) => {

			if(err){

				throw err;
			}
			else {

				res.writeHead(404, {'Content-Type': 'text/html'});
			    res.write(html);
			    res.end();
			}
		})
	}
});


server.listen(3000, () => {

	console.log("Server is running on port 3000");
})
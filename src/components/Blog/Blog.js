import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../costomHooks/hooks';

const Blog = () => {
	useTitle('Blog')
    return (
        <div>
            <section className="bg-gray-600 text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div rel="noopener noreferrer"  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
			<img src="https://www.appknox.com/hs-fs/hubfs/JWT.jpg?width=1999&name=JWT.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">What is JWT, and how does it work?</h3>
				<span className="text-xs text-gray-400">October 24, 2022</span>
				<p className='text-justify'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.JWTs are a good way of securely transmitting information between parties because they can be signed.</p>
			</div>
		</div>
		<div className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<div rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg" alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is the difference between javascript and NodeJS?</h3>
					<span className="text-xs text-gray-400">October 24, 2022</span>
					<p className='text-justify'>Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM.Some of the javascript frameworks are RamdaJS, TypedJS, etc.It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</p>
					<p className='text-justify'>NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.Nodejs is used in server-side development.Nodejs is written in C, C++ and Javascript.</p>
				</div>
			</div>
			<div rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png" alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl text-justify font-semibold group-hover:underline group-focus:underline">Difference between SQL and NoSQL?</h3>
					<span className="text-xs text-gray-400">January 28, 2022</span>
					<p className='text-justify'>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.</p>
					<p className='text-justify'>Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable.Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc.</p>
				</div>
			</div>
			<div rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://tsh.io/wp-content/uploads/2019/09/concurrency-nodejs_.png" alt='' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does NodeJS handle multiple requests at the same time?</h3>
					<span className="text-xs text-gray-400">January 23, 2022</span>
					<p className='text-justify'>As is, node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue.NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
				</div>
			</div>
			
		</div>
		
	</div>
</section>
            
        </div>
    );
};

export default Blog;
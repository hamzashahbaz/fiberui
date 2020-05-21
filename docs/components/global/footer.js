import Link from 'next/link';

const GlobalFooter = (props) => (
	<footer className='footer'>
		<div className='container'>
			<div className='content has-text-centered'>
				<p>
					<strong>Fiber UI</strong> by <a href='https://hamzashahbaz.me'>Hamza Shahbaz</a>. The source code is licensed
					<a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The website content is licensed <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>.
				</p>
			</div>
		</div>
	</footer>
);

export default GlobalFooter;

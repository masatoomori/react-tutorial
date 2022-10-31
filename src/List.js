const LANGUAGES = [
	'JavaScript',
	'C++',
	'Ruby',
	'Java',
	'PHP',
	'GO'
];

export const List = ({ title }) => {
	return (
		<div>
			{
				LANGUAGES.map((lang, index) => {
					return <div key={index}>{ lang }</div>
				})
			}
		</div>
	)
}
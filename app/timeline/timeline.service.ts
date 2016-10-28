export class TimelineService {
    getTimeline() {
        return [
		{
			id: 1,
			title: 'lorem ipsum dolor sit amet',
			user: {
				'id': 1,
				'username': 'user1',
				'password': 'qwe',
				'name': 'user qwe'
			}
		},
		{
			id: 2,
			title: 'card 2',
			user: {
				'id': 1,
				'username': 'user1',
				'password': 'qwe',
				'name': 'user qwe'
			}
		},
		{
			id: 3,
			title: 'card 3',
			user: {
				'id': 2,
				'username': 'user2',
				'password': 'asd',
				'name': 'user asd'
			}
		},
		{
			id: 4,
			title: 'card 4',
			user: {
				'id': 3,
				'username': 'user3',
				'password': 'zxc',
				'name': 'user zc'
			}
		},
		{
			id: 5,
			title: 'card 5',
			user: {
				'id': 2,
				'username': 'user2',
				'password': 'asd',
				'name': 'user asd'
			}
		}
	];
    }


    saveTweets(){}
}
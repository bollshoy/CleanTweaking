import recleaner1 from '../src/assets/recleaner1.png';
import recleaner2 from '../src/assets/recleaner2.png';
import recleaner3 from '../src/assets/recleaner3.png';
import discord from '../src/assets/discord.svg';
import github from '../src/assets/github.svg';
import vk from '../src/assets/vk.svg';
import community from '../src/assets/community.svg';
import lock from '../src/assets/lock.svg';
import paint from '../src/assets/paint.svg';
import specialists from '../src/assets/specialists.svg';
import update from '../src/assets/update.svg';
import joinIcon from '../src/assets/join.png';
import support from '../src/assets/support.svg';


export const RecleanerData = [
	{id: 1, src: recleaner1, alt: recleaner1},
	{id: 2, src: recleaner2, alt: recleaner2},
	{id: 3, src: recleaner3, alt: recleaner3},
];

export const RecleanerIcon = [
	{id: 1, src: discord, alt: discord, href: 'https://discord.gg/6muVyCHYsZ'},
	{id: 2, src: github, alt: github, href: 'https://github.com/changelog-download'},
	{id: 3, src: vk, alt: vk, href: 'https://vk.com/recleaner_official'},
]

export const RecleanerAbout = [
	{id: 1, src: community, alt: community, title: 'Дружелюбное комьюнити'},
	{id: 2, src: specialists, alt: specialists, title: 'Лучшие специалисты'},
	{id: 3, src: update, alt: update, title: 'Частые обновление'},
	{id: 4, src: paint, alt: paint, title: 'Красивые визуалы'},
	{id: 5, src: lock, alt: lock, title: 'Лучшая защита'},
	{id: 6, src: support, alt: support, title: 'Поддержка 24/7'},
]

export const RecleanerJoin = [
	{id: 1, src: joinIcon, title: 'Запусков клиента', description: '34631'},
	{id: 2, src: joinIcon, title: 'Пользователей клиента', description: '27947'},
	{id: 3, src: joinIcon, title: 'Лет с момента открытия', description: '1.1'}
]

export default RecleanerData
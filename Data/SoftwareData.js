import cpuZ from '../src/assets/cpuZ.svg';
import hwinfo from '../src/assets/HWiNFO.png';
import hwmontitor from '../src/assets/HWMonitor.png';
import occt from '../src/assets/OCCT.png';
import speccy from '../src/assets/Speccy.png';
import gpuZ from '../src/assets/gpu-Z.png';
import Prime95 from '../src/assets/Prime95.png';
import mSIAfterburner from '../src/assets/MSIAfterburner.png';
import coreTemp from '../src/assets/CoreTemp.png';

const softwareData = [
	{
		title: 'CPU-Z',
		img: cpuZ,
		description: 'Информация о процессоре, материнской плате, памяти и графике.',
		link: 'https://www.softportal.com/getsoft-1504-cpu-z-2.html',
	},
	{
		title: 'HWiNFO',
		img: hwinfo,
		description: 'Глубокий анализ аппаратного обеспечения и мониторинг в реальном времени.',
		link: 'https://sourceforge.net/projects/hwinfo/files/Windows_Installer/hwi64_810.exe/download',
	},
	{
		title: 'HWMonitor',
		img: hwmontitor,
		description: 'Мониторинг температуры и напряжения компонентов компьютера.',
		link: 'https://www.softportal.com/getsoft-6317-hwmonitor-2.html',
	},
	{
		title: 'OCCT',
		img: occt,
		description: 'Тестирование стабильности системы и диагностика проблем с питанием.',
		link: 'https://www.ocbase.com/download/edition:Personal',
	},
	{
		title: 'Speccy',
		img: speccy,
		description: 'Детальная информация о внутренностях ПК, включая температуру и состояние.',
		link: 'https://www.softportal.com/getsoft-16134-speccy-2.html',
	},
	{
		title: 'GPU-Z',
		img: gpuZ,
		description: 'Информация и мониторинг видеокарты, включая температуру и частоты.',
		link: 'https://www.softportal.com/en/gpu-z/1/getsoft',
	},
	{
		title: 'Prime 95',
		img: Prime95,
		description: 'Стресс-тестирование процессора для проверки стабильности разгона.',
		link: 'https://www.softportal.com/getsoft-45734-prime95-2.html',
	},
	{
		title: 'MSI Afterburner',
		img: mSIAfterburner,
		description: 'Разгон и мониторинг видеокарты, контроль вентиляторов.',
		link: 'https://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip?__token__=exp=1727693687~acl=/*~hmac=644cb897a7b1c20ac0b796fc4718914890af641bf1d0003e3e5ab7b4b312a4cc',
	},
	{
		title: 'Core Temp',
		img: coreTemp,
		description: 'Мониторинг температуры процессора с поддержкой различных моделей.',
		link: 'https://www.softportal.com/getsoft-6417-core-temp-2.html',
	},
];

export default softwareData;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import guardianImage from './assets/images/classes/guardian.jpg';
import engineerImage from './assets/images/classes/engineer.jpg';
import revenantImage from './assets/images/classes/revenant.jpg';
import thiefImage from './assets/images/classes/thief.jpg';
import warriorImage from './assets/images/classes/warrior.jpg';
import necromancerImage from './assets/images/classes/necromancer.jpg';
import elementalistImage from './assets/images/classes/elementalist.jpg';
import mesmerImage from './assets/images/classes/mesmer.jpg';
import rangerImage from './assets/images/classes/ranger.jpg';


const Builds = () => {
    const {t} = useTranslation();

    const guardianBuilds = [
        {
            id: 1,
            name: 'Support Firebrand',
            specialization: 'Firebrand',
            role: 'Support/Healer',
            description: 'Heal and quickness support for WvW zergs'
        },
        {
            id: 2,
            name: 'DPS Dragonhunter',
            specialization: 'Dragonhunter',
            role: 'Ranged DPS',
            description: 'High damage ranged build with traps'
        },
        {
            id: 3,
            name: 'Roaming Willbender',
            specialization: 'Willbender',
            role: 'Mobile DPS',
            description: 'High mobility melee roaming build'
        }
    ];

    const warriorBuilds = [
        {
            id: 4,
            name: 'Zerker DPS',
            specialization: 'Berserker',
            role: 'Melee DPS',
            description: 'High damage berserker mode for frontline'
        },
        {
            id: 5,
            name: 'Spellbreaker',
            specialization: 'Spellbreaker',
            role: 'Boon Strip',
            description: 'Anti-magic specialist with boon removal'
        },
        {
            id: 6,
            name: 'Core Warrior',
            specialization: 'Core',
            role: 'Balanced',
            description: 'Versatile warrior with banners and utility'
        }
    ];

    const necromancerBuilds = [
        {
            id: 7,
            name: 'Scourge Support',
            specialization: 'Scourge',
            role: 'Support/Barrier',
            description: 'Barrier support and condition cleanse for large groups'
        },
        {
            id: 8,
            name: 'Reaper DPS',
            specialization: 'Reaper',
            role: 'Melee DPS',
            description: 'High burst damage with shroud mechanics'
        }
    ];

    const elementalistBuilds = [
        {
            id: 9,
            name: 'Tempest Support',
            specialization: 'Tempest',
            role: 'Support/Auras',
            description: 'Aura support and healing for zerg play'
        }
    ];

    const engineerBuilds = [
        {
            id: 10,
            name: 'Scrapper Support',
            specialization: 'Scrapper',
            role: 'Support/Gyros',
            description: 'Gyro support with stealth and resurrection'
        },
        {
            id: 11,
            name: 'Holosmith DPS',
            specialization: 'Holosmith',
            role: 'Ranged DPS',
            description: 'High damage with photon forge mechanics'
        }
    ];

    const revenantBuilds = [
        {
            id: 12,
            name: 'Herald Support',
            specialization: 'Herald',
            role: 'Support/Boons',
            description: 'Facet support with might and protection'
        },
        {
            id: 13,
            name: 'Renegade DPS',
            specialization: 'Renegade',
            role: 'Ranged DPS',
            description: 'Condition damage with shortbow'
        },
        {
            id: 14,
            name: 'Vindicator Roaming',
            specialization: 'Vindicator',
            role: 'Mobile DPS',
            description: 'High mobility melee roaming build'
        }
    ];

    const thiefBuilds = [
        {
            id: 15,
            name: 'Deadeye Sniper',
            specialization: 'Deadeye',
            role: 'Ranged DPS',
            description: 'Long-range rifle specialist'
        }
    ];

    const mesmerBuilds = [
        {
            id: 16,
            name: 'Chrono Support',
            specialization: 'Chronomancer',
            role: 'Support/Utility',
            description: 'Boon support with distortion and portals'
        },
        {
            id: 17,
            name: 'Mirage Roaming',
            specialization: 'Mirage',
            role: 'Mobile DPS',
            description: 'Evasive condition damage for roaming'
        }
    ];

    const rangerBuilds = [
        {
            id: 18,
            name: 'Druid Support',
            specialization: 'Druid',
            role: 'Support/Healer',
            description: 'Nature magic healing and spirit support'
        },
        {
            id: 19,
            name: 'Soulbeast DPS',
            specialization: 'Soulbeast',
            role: 'Melee DPS',
            description: 'Merged pet damage specialist'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="card">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
                    <h1 className="text-3xl font-bold text-white">{t('builds.title')}</h1>
                </div>

                <p className="text-gray-300 mb-8">{t('builds.description')}</p>

                {/* Example Notice Banner */}
                <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-4 mb-8">
                    <div className="flex items-center gap-3">
                        <span className="text-blue-400 text-xl">ℹ️</span>
                        <p className="text-blue-300">{t('builds.exampleNotice')}</p>
                    </div>
                </div>

                {/* Guardian Class Section */}
                <div className="mb-8">
                    <div
                        className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-6 border border-blue-500/30">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="relative">
                                <img
                                    src={guardianImage}
                                    alt={t('builds.classes.guardian.name')}
                                    className="w-48 h-48 rounded-xl object-cover object-center border-3 border-blue-400/70 shadow-2xl transform hover:scale-105 transition-transform"
                                    style={{objectPosition: 'center 20%'}}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-xl"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-blue-200">{t('builds.classes.guardian.name')}</h2>
                                <p className="text-blue-300/80">{t('builds.classes.guardian.description')}</p>
                                <div className="flex gap-2 mt-2">
                                    <span
                                        className="px-2 py-1 bg-blue-800/50 text-blue-200 rounded text-sm">{t('builds.classes.guardian.roles.support')}</span>
                                    <span
                                        className="px-2 py-1 bg-blue-800/50 text-blue-200 rounded text-sm">{t('builds.classes.guardian.roles.damage')}</span>
                                    <span
                                        className="px-2 py-1 bg-blue-800/50 text-blue-200 rounded text-sm">{t('builds.classes.guardian.roles.heavyArmor')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Guardian Builds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {guardianBuilds.map((build) => (
                                <div key={build.id}
                                     className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-semibold text-white">{t(`builds.classes.guardian.builds.${build.id}.name`)}</h3>
                                        <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">
                      {t(`builds.classes.guardian.builds.${build.id}.specialization`)}
                    </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-2">{t(`builds.classes.guardian.builds.${build.id}.description`)}</p>
                                    <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-orange-900/50 text-orange-300 rounded text-xs">
                      {t(`builds.classes.guardian.builds.${build.id}.role`)}
                    </span>
                                        <button className="text-blue-400 hover:text-blue-300 text-sm">
                                            {t('builds.viewBuild')} →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Warrior Class Section */}
                <div className="mb-8">
                    <div
                        className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 rounded-lg p-6 border border-orange-500/30">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="relative">
                                <img
                                    src={warriorImage}
                                    alt={t('builds.classes.warrior.name')}
                                    className="w-48 h-48 rounded-xl object-cover object-center border-3 border-orange-400/70 shadow-2xl transform hover:scale-105 transition-transform"
                                    style={{objectPosition: 'center 20%'}}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent rounded-xl"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-orange-200">{t('builds.classes.warrior.name')}</h2>
                                <p className="text-orange-300/80">{t('builds.classes.warrior.description')}</p>
                                <div className="flex gap-2 mt-2">
                                    <span
                                        className="px-2 py-1 bg-orange-800/50 text-orange-200 rounded text-sm">{t('builds.classes.warrior.roles.meleeDps')}</span>
                                    <span
                                        className="px-2 py-1 bg-orange-800/50 text-orange-200 rounded text-sm">{t('builds.classes.warrior.roles.frontline')}</span>
                                    <span
                                        className="px-2 py-1 bg-orange-800/50 text-orange-200 rounded text-sm">{t('builds.classes.warrior.roles.heavyArmor')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Warrior Builds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {warriorBuilds.map((build) => (
                                <div key={build.id}
                                     className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-orange-500/50 transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-semibold text-white">{t(`builds.classes.warrior.builds.${build.id}.name`)}</h3>
                                        <span className="px-2 py-1 bg-orange-900/50 text-orange-300 rounded text-xs">
                      {t(`builds.classes.warrior.builds.${build.id}.specialization`)}
                    </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-2">{t(`builds.classes.warrior.builds.${build.id}.description`)}</p>
                                    <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-red-900/50 text-red-300 rounded text-xs">
                      {t(`builds.classes.warrior.builds.${build.id}.role`)}
                    </span>
                                        <button className="text-orange-400 hover:text-orange-300 text-sm">
                                            {t('builds.viewBuild')} →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Necromancer Class Section */}
                <div className="mb-8">
                    <div
                        className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-6 border border-green-500/30">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="relative">
                                <img
                                    src={necromancerImage}
                                    alt={t('builds.classes.necromancer.name')}
                                    className="w-48 h-48 rounded-xl object-cover object-center border-3 border-green-400/70 shadow-2xl transform hover:scale-105 transition-transform"
                                    style={{objectPosition: 'center 20%'}}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent rounded-xl"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-green-200">{t('builds.classes.necromancer.name')}</h2>
                                <p className="text-green-300/80">{t('builds.classes.necromancer.description')}</p>
                                <div className="flex gap-2 mt-2">
                                    <span
                                        className="px-2 py-1 bg-green-800/50 text-green-200 rounded text-sm">{t('builds.classes.necromancer.roles.conditions')}</span>
                                    <span
                                        className="px-2 py-1 bg-green-800/50 text-green-200 rounded text-sm">{t('builds.classes.necromancer.roles.support')}</span>
                                    <span
                                        className="px-2 py-1 bg-green-800/50 text-green-200 rounded text-sm">{t('builds.classes.necromancer.roles.lightArmor')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Necromancer Builds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {necromancerBuilds.map((build) => (
                                <div key={build.id}
                                     className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-green-500/50 transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-semibold text-white">{t(`builds.classes.necromancer.builds.${build.id}.name`)}</h3>
                                        <span className="px-2 py-1 bg-green-900/50 text-green-300 rounded text-xs">
                      {t(`builds.classes.necromancer.builds.${build.id}.specialization`)}
                    </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-2">{t(`builds.classes.necromancer.builds.${build.id}.description`)}</p>
                                    <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs">
                      {t(`builds.classes.necromancer.builds.${build.id}.role`)}
                    </span>
                                        <button className="text-green-400 hover:text-green-300 text-sm">
                                            {t('builds.viewBuild')} →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Elementalist Class Section */}
                <div className="mb-8">
                    <div
                        className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-6 border border-red-500/30">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="relative">
                                <img
                                    src={elementalistImage}
                                    alt={t('builds.classes.elementalist.name')}
                                    className="w-48 h-48 rounded-xl object-cover object-center border-3 border-red-400/70 shadow-2xl transform hover:scale-105 transition-transform"
                                    style={{objectPosition: 'center 20%'}}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent rounded-xl"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-red-200">{t('builds.classes.elementalist.name')}</h2>
                                <p className="text-red-300/80">{t('builds.classes.elementalist.description')}</p>
                                <div className="flex gap-2 mt-2">
                                    <span
                                        className="px-2 py-1 bg-red-800/50 text-red-200 rounded text-sm">{t('builds.classes.elementalist.roles.elements')}</span>
                                    <span
                                        className="px-2 py-1 bg-red-800/50 text-red-200 rounded text-sm">{t('builds.classes.elementalist.roles.support')}</span>
                                    <span
                                        className="px-2 py-1 bg-red-800/50 text-red-200 rounded text-sm">{t('builds.classes.elementalist.roles.lightArmor')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Elementalist Builds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {elementalistBuilds.map((build) => (
                                <div key={build.id}
                                     className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-red-500/50 transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-semibold text-white">{t(`builds.classes.elementalist.builds.${build.id}.name`)}</h3>
                                        <span className="px-2 py-1 bg-red-900/50 text-red-300 rounded text-xs">
                      {t(`builds.classes.elementalist.builds.${build.id}.specialization`)}
                    </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-2">{t(`builds.classes.elementalist.builds.${build.id}.description`)}</p>
                                    <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-yellow-900/50 text-yellow-300 rounded text-xs">
                      {t(`builds.classes.elementalist.builds.${build.id}.role`)}
                    </span>
                                        <button className="text-red-400 hover:text-red-300 text-sm">
                                            {t('builds.viewBuild')} →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Engineer Class Section */}
                <div className="mb-8">
                    <div
                        className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-lg p-6 border border-yellow-500/30">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="relative">
                                <img
                                    src={engineerImage}
                                    alt={t('builds.classes.engineer.name')}
                                    className="w-48 h-48 rounded-xl object-cover object-center border-3 border-yellow-400/70 shadow-2xl transform hover:scale-105 transition-transform"
                                    style={{objectPosition: 'center 20%'}}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 to-transparent rounded-xl"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-yellow-200">{t('builds.classes.engineer.name')}</h2>
                                <p className="text-yellow-300/80">{t('builds.classes.engineer.description')}</p>
                                <div className="flex gap-2 mt-2">
                                    <span
                                        className="px-2 py-1 bg-yellow-800/50 text-yellow-200 rounded text-sm">{t('builds.classes.engineer.roles.technology')}</span>
                                    <span
                                        className="px-2 py-1 bg-yellow-800/50 text-yellow-200 rounded text-sm">{t('builds.classes.engineer.roles.support')}</span>
                                    <span
                                        className="px-2 py-1 bg-yellow-800/50 text-yellow-200 rounded text-sm">{t('builds.classes.engineer.roles.mediumArmor')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Engineer Builds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {engineerBuilds.map((build) => (
                                <div key={build.id}
                                     className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-yellow-500/50 transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-semibold text-white">{t(`builds.classes.engineer.builds.${build.id}.name`)}</h3>
                                        <span className="px-2 py-1 bg-yellow-900/50 text-yellow-300 rounded text-xs">
                      {t(`builds.classes.engineer.builds.${build.id}.specialization`)}
                    </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-2">{t(`builds.classes.engineer.builds.${build.id}.description`)}</p>
                                    <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-orange-900/50 text-orange-300 rounded text-xs">
                      {t(`builds.classes.engineer.builds.${build.id}.role`)}
                    </span>
                                        <button className="text-yellow-400 hover:text-yellow-300 text-sm">
                                            {t('builds.viewBuild')} →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Revenant Class Section */}
                <div className="mb-8">
                    <div
                        className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg p-6 border border-purple-500/30">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="relative">
                                <img
                                    src={revenantImage}
                                    alt={t('builds.classes.revenant.name')}
                                    className="w-48 h-48 rounded-xl object-cover object-center border-3 border-purple-400/70 shadow-2xl transform hover:scale-105 transition-transform"
                                    style={{objectPosition: 'center 20%'}}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent rounded-xl"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-purple-200">{t('builds.classes.revenant.name')}</h2>
                                <p className="text-purple-300/80">{t('builds.classes.revenant.description')}</p>
                                <div className="flex gap-2 mt-2">
                                    <span
                                        className="px-2 py-1 bg-purple-800/50 text-purple-200 rounded text-sm">{t('builds.classes.revenant.roles.legends')}</span>
                                    <span
                                        className="px-2 py-1 bg-purple-800/50 text-purple-200 rounded text-sm">{t('builds.classes.revenant.roles.energy')}</span>
                                    <span
                                        className="px-2 py-1 bg-purple-800/50 text-purple-200 rounded text-sm">{t('builds.classes.revenant.roles.heavyArmor')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Revenant Builds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {revenantBuilds.map((build) => (
                                <div key={build.id}
                                     className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-semibold text-white">{t(`builds.classes.revenant.builds.${build.id}.name`)}</h3>
                                        <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs">
                      {t(`builds.classes.revenant.builds.${build.id}.specialization`)}
                    </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-2">{t(`builds.classes.revenant.builds.${build.id}.description`)}</p>
                                    <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded text-xs">
                      {t(`builds.classes.revenant.builds.${build.id}.role`)}
                    </span>
                                        <button className="text-purple-400 hover:text-purple-300 text-sm">
                                            {t('builds.viewBuild')} →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Thief Class Section */}
                <div className="mb-8">
                    <div
                        className="bg-gradient-to-r from-gray-900/30 to-slate-900/30 rounded-lg p-6 border border-gray-500/30">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="relative">
                                <img
                                    src={thiefImage}
                                    alt={t('builds.classes.thief.name')}
                                    className="w-48 h-48 rounded-xl object-cover object-center border-3 border-gray-400/70 shadow-2xl transform hover:scale-105 transition-transform"
                                    style={{objectPosition: 'center 20%'}}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-xl"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-200">{t('builds.classes.thief.name')}</h2>
                                <p className="text-gray-300/80">{t('builds.classes.thief.description')}</p>
                                <div className="flex gap-2 mt-2">
                                    <span
                                        className="px-2 py-1 bg-gray-800/50 text-gray-200 rounded text-sm">{t('builds.classes.thief.roles.stealth')}</span>
                                    <span
                                        className="px-2 py-1 bg-gray-800/50 text-gray-200 rounded text-sm">{t('builds.classes.thief.roles.mobility')}</span>
                                    <span
                                        className="px-2 py-1 bg-gray-800/50 text-gray-200 rounded text-sm">{t('builds.classes.thief.roles.mediumArmor')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Thief Builds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {thiefBuilds.map((build) => (
                                <div key={build.id}
                                     className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-gray-500/50 transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-semibold text-white">{t(`builds.classes.thief.builds.${build.id}.name`)}</h3>
                                        <span className="px-2 py-1 bg-gray-900/50 text-gray-300 rounded text-xs">
                      {t(`builds.classes.thief.builds.${build.id}.specialization`)}
                    </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-2">{t(`builds.classes.thief.builds.${build.id}.description`)}</p>
                                    <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-slate-900/50 text-slate-300 rounded text-xs">
                      {t(`builds.classes.thief.builds.${build.id}.role`)}
                    </span>
                                        <button className="text-gray-400 hover:text-gray-300 text-sm">
                                            {t('builds.viewBuild')} →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mesmer Class Section */}
                <div className="mb-8">
                    <div
                        className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-lg p-6 border border-pink-500/30">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="relative">
                                <img
                                    src={mesmerImage}
                                    alt={t('builds.classes.mesmer.name')}
                                    className="w-48 h-48 rounded-xl object-cover object-center border-3 border-pink-400/70 shadow-2xl transform hover:scale-105 transition-transform"
                                    style={{objectPosition: 'center 20%'}}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent rounded-xl"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-pink-200">{t('builds.classes.mesmer.name')}</h2>
                                <p className="text-pink-300/80">{t('builds.classes.mesmer.description')}</p>
                                <div className="flex gap-2 mt-2">
                                    <span
                                        className="px-2 py-1 bg-pink-800/50 text-pink-200 rounded text-sm">{t('builds.classes.mesmer.roles.illusions')}</span>
                                    <span
                                        className="px-2 py-1 bg-pink-800/50 text-pink-200 rounded text-sm">{t('builds.classes.mesmer.roles.utility')}</span>
                                    <span
                                        className="px-2 py-1 bg-pink-800/50 text-pink-200 rounded text-sm">{t('builds.classes.mesmer.roles.lightArmor')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Mesmer Builds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {mesmerBuilds.map((build) => (
                                <div key={build.id}
                                     className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-pink-500/50 transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-semibold text-white">{t(`builds.classes.mesmer.builds.${build.id}.name`)}</h3>
                                        <span className="px-2 py-1 bg-pink-900/50 text-pink-300 rounded text-xs">
                      {t(`builds.classes.mesmer.builds.${build.id}.specialization`)}
                    </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-2">{t(`builds.classes.mesmer.builds.${build.id}.description`)}</p>
                                    <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs">
                      {t(`builds.classes.mesmer.builds.${build.id}.role`)}
                    </span>
                                        <button className="text-pink-400 hover:text-pink-300 text-sm">
                                            {t('builds.viewBuild')} →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ranger Class Section */}
                <div className="mb-8">
                    <div
                        className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-lg p-6 border border-emerald-500/30">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="relative">
                                <img
                                    src={rangerImage}
                                    alt={t('builds.classes.ranger.name')}
                                    className="w-48 h-48 rounded-xl object-cover object-center border-3 border-emerald-400/70 shadow-2xl transform hover:scale-105 transition-transform"
                                    style={{objectPosition: 'center 20%'}}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent rounded-xl"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-emerald-200">{t('builds.classes.ranger.name')}</h2>
                                <p className="text-emerald-300/80">{t('builds.classes.ranger.description')}</p>
                                <div className="flex gap-2 mt-2">
                                    <span
                                        className="px-2 py-1 bg-emerald-800/50 text-emerald-200 rounded text-sm">{t('builds.classes.ranger.roles.nature')}</span>
                                    <span
                                        className="px-2 py-1 bg-emerald-800/50 text-emerald-200 rounded text-sm">{t('builds.classes.ranger.roles.pets')}</span>
                                    <span
                                        className="px-2 py-1 bg-emerald-800/50 text-emerald-200 rounded text-sm">{t('builds.classes.ranger.roles.mediumArmor')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Ranger Builds */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {rangerBuilds.map((build) => (
                                <div key={build.id}
                                     className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-emerald-500/50 transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-semibold text-white">{t(`builds.classes.ranger.builds.${build.id}.name`)}</h3>
                                        <span className="px-2 py-1 bg-emerald-900/50 text-emerald-300 rounded text-xs">
                      {t(`builds.classes.ranger.builds.${build.id}.specialization`)}
                    </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-2">{t(`builds.classes.ranger.builds.${build.id}.description`)}</p>
                                    <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-teal-900/50 text-teal-300 rounded text-xs">
                      {t(`builds.classes.ranger.builds.${build.id}.role`)}
                    </span>
                                        <button className="text-emerald-400 hover:text-emerald-300 text-sm">
                                            {t('builds.viewBuild')} →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/builds" element={<Builds/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;

 # CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NAC WvW Guild React Application**
A modern React application for the Ninja Asura Club Guild Wars 2 WvW guild, replacing the existing basic website at https://nac-wvw.eu/.

## Current Site Analysis

The existing site provides these core features:
- **Message of the Day**: WvW raid schedules and announcements
- **Guild Bank**: Resource management and tracking
- **Tactics Log**: Strategic planning and battle records
- **Guild Siege Weapons**: Equipment tracking
- **Decorations Log**: Guild hall decoration management
- **Member List**: Guild roster with Discord, rank, and join date info
- **WvW Stats**: Performance tracking and statistics

**Technical Stack (Current)**: Basic HTML/CSS/JS with minimal styling
**Target Tech Stack**: React + TypeScript + Tailwind CSS + Vite
**Target Improvement**: Modern React application with enhanced UX/UI

## Development Setup

*React application setup will be configured here*

## Architecture Plan

**Proposed React App Structure**:
```
src/
├── components/
│   ├── common/          # Shared UI components
│   ├── layout/          # Header, sidebar, footer
│   ├── guild/           # Guild-specific components
│   └── wvw/             # WvW-related components
├── pages/
│   ├── Dashboard/       # Message of the Day
│   ├── GuildBank/
│   ├── TacticsLog/
│   ├── SiegeWeapons/
│   ├── Decorations/
│   ├── Members/
│   └── WvWStats/
├── hooks/               # Custom React hooks
├── services/            # API calls, data management
├── utils/               # Helper functions
└── styles/              # Theme, global styles
```

**Key Features to Implement**:
- Modern responsive design with GW2 theming (Tailwind CSS)
- Type-safe development with TypeScript
- Interactive dashboards for WvW stats
- Enhanced member management
- Discord integration
- Mobile-first approach
- Real-time data updates
- Component library with consistent design system

**Future Considerations**:
- ArcDPS log integration (large HTML files, 5-20MB)
- Combat log analysis and visualization
- Performance metrics from WvW encounters

## Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Dependencies
npm install          # Install dependencies
npm install <package> # Add new package
```

## Notes

- Target: Modern Guild Wars 2 WvW guild management application
- Focus: Enhanced UX/UI while maintaining all current functionality
- Tech Stack: React + TypeScript + Tailwind CSS + Vite
- Design: WvW/GW2 themed with professional guild management features
- Benefits: Type safety, rapid styling, excellent DX, fast builds

## Guild Links

- Guild Website: https://gw2mists.com/guilds/Ninja%20Asura%20Club
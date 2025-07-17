# Discord API Analysis for Invite FTPDBQfG4t

## Summary of Findings

### 1. Invite API: `/api/v10/invites/FTPDBQfG4t?with_counts=true&with_expiration=true`

**✅ Available Data:**
- **Guild Information:**
  - Guild ID: `1318998593960673300`
  - Guild Name: `"Ninja Asura Club"`
  - Guild Icon: Available (hash provided)
  - Guild Features: Array of enabled features
  - Verification Level: Numeric value

- **Member Counts:**
  - Total Members: `59`
  - Online Members: `9`
  - These are real-time counts from Discord

- **Inviter Information:**
  - Username: `"sonnenlaeufer"`
  - User ID, Avatar, Discriminator
  - Public flags and other metadata

- **Channel Information:**
  - Channel ID and Name: `"welcome"`
  - Channel Type

- **Profile/Branding:**
  - Badge Color Primary: `"#ff0000"` (red)
  - Server profile information

**❌ NOT Available:**
- Individual member lists
- Member usernames, avatars, or profiles
- Member roles or permissions
- Detailed presence information beyond counts
- Member join dates or activity

### 2. Widget API: `/api/guilds/{guild_id}/widget.json`

**❌ Result:** 403 Forbidden
- The guild does not have the Discord widget enabled
- This API could potentially provide member lists if enabled
- Requires guild administrator to enable widget in server settings

### 3. Additional Parameters Testing

Testing `guild_scheduled_events=true` parameter did not reveal additional member data - the response structure remained focused on invite metadata rather than member details.

## Practical Applications for NAC WvW Guild App

### What We CAN Use:
1. **Real Member Counts:** Display live member count (59) and online count (9)
2. **Guild Verification:** Confirm guild identity and legitimacy
3. **Server Health:** Show activity level via online/total member ratio
4. **Guild Branding:** Use official guild icon and colors
5. **Join Link Validation:** Verify invite is active and working

### What We CANNOT Get:
1. **Member Roster:** No access to individual member information
2. **Member Profiles:** No usernames, avatars, or Discord profiles
3. **Role Information:** No rank or permission data
4. **Activity Details:** No individual member activity or status

## Recommendation

For the NAC WvW Guild React application, we should:

1. **Use Real Discord Data Where Available:**
   ```javascript
   // Example integration
   const discordData = {
     memberCount: 59,        // Real from API
     onlineCount: 9,         // Real from API
     guildName: "Ninja Asura Club",  // Real from API
     guildIcon: "...",       // Real from API
     inviteCode: "FTPDBQfG4t" // Real from API
   };
   ```

2. **Keep Mock Data for Member Details:**
   Since Discord doesn't provide individual member information through public APIs, we'll need to maintain our mock member data for the roster functionality.

3. **Consider Alternative Approaches:**
   - Guild administrators could manually export member lists
   - Use Discord bot with proper permissions (requires OAuth setup)
   - Hybrid approach: Real counts + curated member information

The Discord public APIs provide valuable server-level information but are intentionally limited for privacy reasons regarding individual member data.
# udon_radio
requires: nodejs, npm

run:
npm install
npm start

# Introduction

Ok so I really don't know much when it comes to reactjs (and coding in general), so bear with me. I'm building the mobile version of udonradio.fr. The idea is to squish the 3 panneled flex display view into one, which implies using a lot of `display: none`s in the css stylesheet, since I can't get anything done with reactjs. I know it's dumb, but it is straightforward and it somehow kinda works.

Flash-course on how the site is constructed structurally so you can understand what's going on :
  - menu = desktop menu lets you choose more options than the mobile menu. The mobile menu lets you display the chat on middlepanel since rightpannel isn't displayed ('member `display:none`?)
  - playerpanel = top panel on desktop, bottom panel on mobile device. Has the play/pause icons + the metadata of the song + a volume input (not on mobile)
  - rightpanel = displays chat. Won't be used on mobile
  - middlepanel = displays what the user clicks on in the menu (be it the desktop-style side menu or the mobile-style top menu)
  - leftpanel = inexistent
  - panelcontainer = contains rightpannel + middlepannel + menu. Doesn't contain the playerpannel
  

# What has been done

As of today (22 jan 2018), we have :
  - a fitted and restyled playerpanel that won't display the volume input since every mobile device has its own hardware volume control (you can sill mute the sound directly on the webpage)
  - a "body", **temporarily** displaying the rightpannel so we can see the chat is flowing well with the mobile structure
  - a background semi-transparent image on the "body" of the webpage (not the playerpanel nor the topmenu, which stay white ftm)
  - a nonfunctionnal and redundant topmenu (casted as a POC, we would ideally need to re-design dynamically the desktop menu)
  
# kwiwi's hopes and dreams

For the mobile version to be pulled, we still need :
  - a dynamic re-arrangement of the desktop-menu to a mobile-version of itself, meaning :
    - switching from vertical textual tabs to horizontal fitted icons/images
    - swtiching from desktop-friendly tabs to mobile-friendly tabs (which means : -uploadview -administration +chat on middlepanel)
    - rewriting tings in layout.js (tried it, didn't work out at all)
  - that's actually all I can think about rn, i'll update if anything comes around
  
  Don't be scared to ask for about anything, i'll gladly help with anything I can (not much when it comes to programming unfortunately).
  Thanks!


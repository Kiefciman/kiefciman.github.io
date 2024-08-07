function OpenPage(page) {
    window.location.replace(page + '.html')
}

function OpenWin(win) {
    switch(win) {
        case 'github':
            window.open('https://github.com/Kiefciman')
            break
        case 'reddit':
            window.open('https://www.reddit.com/user/Kiefciman/')
            break
        case 'discord':
            window.open('https://discordapp.com/users/535905819196260363')
            break
        case 'steam':
            window.open('https://steamcommunity.com/profiles/76561198884191391')
            break
        case 'itch.io':
            window.open('https://kiefciman.itch.io/')
            break
        case 'wot':
            window.open('https://www.worldoftrucks.com/en/profile/9036821')
            break
        case 'nekoboard':
            window.open('https://github.com/Kiefciman/Nekoboard')
            break
        case 'myanimestats':
            window.open('https://kiefciman.github.io/myanimestats')
            break
        case 'mymangastats':
            window.open('https://kiefciman.github.io/mymangastats')
            break
        case 'dwm-kiefciman':
            window.open('https://github.com/Kiefciman/dwm-kiefciman')
            break
        case 'nekofetch':
            window.open('https://github.com/Kiefciman/nekofetch')
            break
        case 'keqinging':
            window.open('https://github.com/Kiefciman/keqinging')
            break
        case 'nekofying':
            window.open('https://kiefciman.github.io/Nekofying')
            break
        case 'stallman':
            window.open('https://stallman.org/')
            break
        case 'gnu':
            window.open('https://www.gnu.org/')
            break
        case 'suckless':
            window.open('https://suckless.org/')
            break
        case 'bugswriter':
            window.open('https://www.bugswriter.com/')
            break
        case 'random':
            window.open('https://wiby.me/surprise/')
            break
        case 'omfgdogs':
            window.open('https://www.omfgdogs.com/')
            break
        case 'potatothedevil':
            window.open('https://potatothedevil.github.io/hel')
            break
    }
}

function OpenBlog(blog) {
    window.location.replace('blogs/' + blog + '.html')
}

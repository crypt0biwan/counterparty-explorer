const form = document.querySelector('form')
let balances = []
let transactions = []

const header = document.querySelector('#header')
const result = document.querySelector('#result')

let cards = []

// http://www.julianhaight.com/btcvalid.js
!function(){function r(r,t,e){var a;return a=Math.ceil(t/bpe)+1,a=e>a?e:a,buff=new Array(a),n(buff,r),buff}function n(r,t){var n,e;for(e=t,n=0;n<r.length;n++)r[n]=e&mask,e>>=bpe}function e(r,t){return t>>>r|t<<32-r}function a(r,t,n){return r&t^~r&n}function o(r,t,n){return r&t^r&n^t&n}function u(r){return e(2,r)^e(13,r)^e(22,r)}function f(r){return e(6,r)^e(11,r)^e(25,r)}function s(r){return e(7,r)^e(18,r)^r>>>3}function i(r){return e(17,r)^e(19,r)^r>>>10}function c(r,t){return r[15&t]+=i(r[t+14&15])+r[t+9&15]+s(r[t+1&15])}function _(r,t){var n=(65535&r)+(65535&t),e=(r>>16)+(t>>16)+(n>>16);return e<<16|65535&n}function h(){A=new Array(8),y=new Array(2),C=new Array(64),y[0]=y[1]=0,A[0]=1779033703,A[1]=3144134277,A[2]=1013904242,A[3]=2773480762,A[4]=1359893119,A[5]=2600822924,A[6]=528734635,A[7]=1541459225}function v(){var r,t,n,e,s,i,h,v,g,b,d=new Array(16);r=A[0],t=A[1],n=A[2],e=A[3],s=A[4],i=A[5],h=A[6],v=A[7];for(var m=0;16>m;m++)d[m]=C[(m<<2)+3]|C[(m<<2)+2]<<8|C[(m<<2)+1]<<16|C[m<<2]<<24;for(var p=0;64>p;p++)g=v+f(s)+a(s,i,h)+k[p],g+=16>p?d[p]:c(d,p),b=u(r)+o(r,t,n),v=h,h=i,i=s,s=_(e,g),e=n,n=t,t=r,r=_(g,b);A[0]+=r,A[1]+=t,A[2]+=n,A[3]+=e,A[4]+=s,A[5]+=i,A[6]+=h,A[7]+=v}function g(r,t){var n,e,a=0;e=y[0]>>3&63;var o=63&t;for((y[0]+=t<<3)<t<<3&&y[1]++,y[1]+=t>>29,n=0;t>n+63;n+=64){for(var u=e;64>u;u++)C[u]=r.charCodeAt(a++);v(),e=0}for(var u=0;o>u;u++)C[u]=r.charCodeAt(a++)}function b(){var r=y[0]>>3&63;if(C[r++]=128,56>=r)for(var t=r;56>t;t++)C[t]=0;else{for(var t=r;64>t;t++)C[t]=0;v();for(var t=0;56>t;t++)C[t]=0}C[56]=y[1]>>>24&255,C[57]=y[1]>>>16&255,C[58]=y[1]>>>8&255,C[59]=255&y[1],C[60]=y[0]>>>24&255,C[61]=y[0]>>>16&255,C[62]=y[0]>>>8&255,C[63]=255&y[0],v()}function d(){for(var r=new String,t=0;8>t;t++)for(var n=28;n>=0;n-=4)r+=x.charAt(A[t]>>>n&15);return r}function m(r){return h(),g(r,r.length),b(),d()}function p(r){if(0===r.length)return[];var t,n,e=[0];for(t=0;t<r.length;t++){var a=r[t];if(!(a in S))throw new Error("Non-base58 character");for(n=0;n<e.length;n++)e[n]*=D;e[0]+=S[a];var o=0;for(n=0;n<e.length;++n)e[n]+=o,o=e[n]>>8,e[n]&=255;for(;o;)e.push(255&o),o>>=8}for(t=0;"1"===r[t]&&t<r.length-1;t++)e.push(0);for(e=e.reverse(),output="",t=0;t<e.length;t++)output+=String.fromCharCode(e[t]);return output}function l(r){try{var t=p(r);if(25!=t.length)return!1;var n=t.substr(t.length-4),e=t.substr(0,t.length-4),a=w(m(w(m(e)))).substr(0,4);return n!=a?!1:!0}catch(o){return!1}}function w(r){for(var t="",n=0;n<r.length;n+=2)t+=String.fromCharCode(parseInt(r.substr(n,2),16));return t}for(bpe=0,mask=0,radix=mask+1,digitsStr="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\'\"+-",bpe=0;1<<bpe+1>1<<bpe;bpe++);bpe>>=1,mask=(1<<bpe)-1,radix=mask+1,one=r(1,1,1),t=new Array(0),ss=t,s0=t,s1=t,s2=t,s3=t,s4=t,s5=t,s6=t,s7=t,T=t,sa=t,mr_x1=t,mr_r=t,mr_a=t,eg_v=t,eg_u=t,eg_A=t,eg_B=t,eg_C=t,eg_D=t,md_q1=t,md_q2=t,md_q3=t,md_r=t,md_r1=t,md_r2=t,md_tt=t,primes=t,pows=t,s_i=t,s_i2=t,s_R=t,s_rm=t,s_q=t,s_n1=t,s_a=t,s_r2=t,s_n=t,s_b=t,s_d=t,s_x1=t,s_x2=t,s_aa=t,rpprb=t;for(var A,y,C,k=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),x="0123456789abcdef",q="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",S={},B=0;B<q.length;B++)S[q.charAt(B)]=B;var D=58;window.checkAddress=l}();

const formatValue = (value, decimals = 0, style = 'decimal') =>
    new Intl.NumberFormat('en-US', {
        style,
        currency: 'USD',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value)

const showLoadingMessage = (text = "loading..") => {
    result.innerHTML = `<div class="alert alert-info" role="alert">
        <span>
            <i class="info-btn bi bi-info-circle-fill"></i>
        </span> ${text}
    </div>`
}

const showApiError = (html) => {
    result.innerHTML = html ? html : `<div class="alert alert-danger" role="alert">
        <i class="bi bi-exclamation-triangle-fill"></i> Couldn't fetch API
    </div>`
}

let base64toDataURL = function (data) {
    return data.replace(/^R0lGOD/, 'data:image/gif;base64,R0lGOD')
        .replace(/^iVBORw/, 'data:image/png;base64,iVBORw')
        .replace(/^\/9j\/4/, 'data:image/jpeg;base64,/9j/4')
        .replace(/^UklGR/, 'data:image/webp;base64,UklGR')
        .replace(/^JVBERi/,'data:application/pdf;base64,JVBERi')
        .replace(/^PCFET0/,'data:text/html;base64,PCFET0')

    // R0lGOD image/gif
    // /9j/4  image/jpeg
    // JVBERi0xLj application/pdf 
    // PCFET0NUWVBFI text/html 
}

const get_card = name => {
    const c = _.filter(cards, c => c.name === name)[0]

    if(c) {
        return c
    }

    return false
}

const get_json = async url => {
    const formatted_url = url.startsWith('http') ? url : 'https://' + url
    return axios.get(formatted_url)
}

const get_image = async (x) => {
    let ret = {
        collection: null,
        desc: null,
    }

    let card = get_card(x.asset.toUpperCase())

    if(x.description.toLowerCase().startsWith('stamp:') ) {
        // Bitcoin Stamp

        // replace STAMP: or stamp:
        let stripped = x.description.replace(/STAMP:/ig,'')
        let dataURL = base64toDataURL(stripped)

        if(dataURL.startsWith('data:')) {
            ret.img = `<img src="${dataURL}" class="image-pixelated" />`
        } else {
            ret.img = `"${atob(stripped)}"`
        }

        ret.collection = `<span class="badge bg-secondary">stamps</span>`
    } else if(card) {
        ret.img = `<img src="${card.img_url}" class="image-pixelated" />`
        ret.collection = `<span class="badge bg-secondary">${card.collection}</span>`
    } else if(x.description.endsWith('.json')) {
        try {
            const json_data = (await get_json(x.description)).data

            if(json_data) {
                if(json_data.image) {
                    ret.img = `<img src="${json_data.image}" class="image-pixelated" />`
                } else if(json_data.image_large) {
                    ret.img = `<img src="${json_data.image_large}" class="image-pixelated" />`
                }
            } else {
                ret.img = 'external img'
                ret.desc = x.description
            }
        } catch(e) {
            ret.img = 'external img'
            ret.desc = x.description
        }
    } else if(x.description.startsWith('http')) {
        ret.img = `<img src="${x.description}" class="image-pixelated" />`
    } else if(x.description.startsWith('imgur/')) {
        ret.img = `<img src="https://i.imgur.com/${x.description.split(';')[0].replace('imgur/','')}" class="image-pixelated" />`
    } else {
        ret.img = '[no image]'
        ret.desc = x.description
    }

    return ret
}

const get_rpc = async data => {
    return axios.post(
        `https://api.counterparty.io:4001/?ts=${+new Date()}`, 
        data,
        {
            auth:{
                username:"rpc",
                password:"rpc"
            }
        }
    )
}

const get_asset = async asset => {
    return await get_rpc({ 
        "jsonrpc": "2.0", 
        "id": 0, 
        "method": "get_asset_info", 
        "params": { "asset": asset }
    })
}

const get_balances = async address => {
    return await get_rpc({ 
        "jsonrpc": "2.0", 
        "id": 0, 
        "method": "get_balances", 
        "params": {
            "filters": [
                {
                    "field": "address",
                    "op": "==",
                    "value": address
                }
            ]
        }
    })
}

const get_credits = async address => {
    return await get_rpc({ 
        "jsonrpc": "2.0", 
        "id": 0, 
        "method": "get_credits", 
        "params": {
            "filters": [
                {
                    "field": "address",
                    "op": "==",
                    "value": address
                }
            ],
            "order_by": "block_index",
            "order_dir": "desc"
        }
    })
}

const get_debits = async address => {
    return await get_rpc({ 
        "jsonrpc": "2.0", 
        "id": 0, 
        "method": "get_debits", 
        "params": {
            "filters": [
                {
                    "field": "address",
                    "op": "==",
                    "value": address
                }
            ],
            "order_by": "block_index",
            "order_dir": "desc"
        }
    })
}

const update_images = (assets = balances) => {
    _.each(_.filter(assets, x => x.quantity > 0), async x => {
        const {
            asset
        } = x

        const assetInfo = await get_image((await get_asset(asset)).data.result[0])
        
        document.querySelectorAll(`.img-${asset}`).forEach(el => {
            el.innerHTML = assetInfo.img
        })

        if(assetInfo.desc !== null && document.querySelector(`#description-${asset}`)) {
            document.querySelector(`#description-${asset}`).innerHTML = assetInfo.desc
        }

        if(assetInfo.collection !== null) {
            document.querySelectorAll(`.collection-${asset}`).forEach(el => {
                el.innerHTML = assetInfo.collection
            })
        }        
    })
}

const get_assets_table_html = () => {
    let filteredBalances = _.filter(balances, x => x.quantity > 0)
    let html = ''

    if(filteredBalances.length) {
        html = 
            `<div class="table-responsive">
                <table id="balances" class="table table-striped mb-5">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Asset</th>
                            <th scope="col">Collection</th>
                            <th style="text-align: right; padding-right: 20px;" scope="col">Quantity</th>
                            <th scope="col">Description</th>
                            <th style="text-align: right; padding-right: 20px;" scope="col">Divisible</th>
                        </tr>
                    </thead>
                <tbody>`

            _.each(filteredBalances, x => {
                const {
                    asset, quantity, divisible
                } = x

                html += 
                    `<tr>
                        <td class="img-${asset}" class="col-1">
                            <!-- gets filled async -->
                        </td>
                        
                        <td class="col-4">
                            ${asset}
                        </td>

                        <td id="collection-${asset}" class="col-4">
                            <!-- gets filled async -->
                        </td>
                        
                        <td style="text-align: right; padding-right: 20px;">
                            ${formatValue(quantity)}
                        </td>
                        
                        <td class="description-${asset}" class="col-4">
                            <!-- gets filled async -->
                        </td>
                        
                        <td style="text-align: right; padding-right: 20px;">
                            ${
                                divisible 
                                ? `<i class="bi-check-circle-fill" style="font-size: 1rem;"></i>`
                                : `<i class="bi-x-circle" style="font-size: 1rem; opacity: 0.4;"></i>` 
                            }
                        </td>
                    </tr>`                    
            })
        
        html +=
            `</tbody>
            </table>
            </div>`
    } else {
        html = `No balances for this address`          
    }

    return html    
}

const get_transactions_table_html = (filteredBalances) => {
    let html = ''

    if(filteredBalances.length) {
        html = 
            `<div class="table-responsive">
                <table id="balances" class="table table-striped mb-5">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>

                            <th scope="col">Type</th>

                            <th scope="col">Block</th>
                            <th scope="col">Asset</th>
                            <th scope="col">Collection</th>
                            <th style="text-align: right; padding-right: 20px;" scope="col">Quantity</th>
                            <th scope="col">TX</th>
                        </tr>
                    </thead>
                <tbody>`

            _.each(filteredBalances, x => {
                const {
                    type, action, block_index, asset, address, quantity, calling_function, event
                } = x

                const tx_type = action ? action : calling_function
                let icon = ''

                switch(tx_type) {
                    case 'dividend': {
                        icon = '<i class="bi bi-piggy-bank-fill"></i>'
                        break
                    }
                    case 'send': {
                        icon = '<i class="bi bi-arrow-up-right-square"></i>'
                        break
                    }
                    default: {
                        if(type === 'debit') {
                            icon = '<i class="bi bi-arrow-up-right-square"></i>'
                        } else {
                            icon = '<i class="bi bi-arrow-down-right-square-fill"></i>'
                        }
                        break
                    }
                }

                html += 
                    `<tr>
                        <td class="img-${asset}" class="col-1">
                            <!-- gets filled async -->
                        </td>
                        
                        <td class="col-4">
                            <span title="${tx_type}">${icon}</span>
                        </td>

                        <td class="col-4">
                            ${formatValue(block_index)}
                        </td>

                        <td class="col-4">
                            ${asset}
                        </td>

                        <td class="collection-${asset}" class="col-4">
                            <!-- gets filled async -->
                        </td>
                        
                        <td style="text-align: right; padding-right: 20px;">
                            ${formatValue(quantity)}
                        </td>
                        
                        <td class="col-4">
                            <a href="https://www.xcp.dev/tx/${event}" target="_blank">tx&nbsp;details</a>
                        </td>
                    </tr>`                    
            })
        
        html +=
            `</tbody>
            </table>
            </div>`
    } else {
        html = `No balances for this address`          
    }

    return html
}

const check_transactions = async (address) => {
    try {
        showLoadingMessage('Getting txs from API')

        let credits = (await get_credits(address)).data.result.map(i => ({
            type: "credit",
            ...i
        }))
        let debits = (await get_debits(address)).data.result.map(i => ({
            type: "debit",
            ...i
        }))
        
        transactions = _.orderBy([].concat(credits, debits), ['block_index'], ['desc'])
        let filteredBalances = _.filter(transactions, x => x.quantity > 0)

        result.innerHTML = get_transactions_table_html(filteredBalances)

        update_images(filteredBalances)

        new Tablesort(document.getElementById('balances'))
    } catch(e) {
        console.log(e)
        showApiError(`<div class="alert alert-danger" role="alert">
            <i class="bi bi-exclamation-triangle-fill"></i> There was a problem fetching the data..
        </div>`)
    }
}

const check_balances = async (address) => {
    try {
        showLoadingMessage('Getting assets from API')

        balances = (await get_balances(address)).data.result
        
        result.innerHTML = get_assets_table_html()

        update_images()

        new Tablesort(document.getElementById('balances'))
    } catch(e) {
        console.log(e)
        showApiError(`<div class="alert alert-danger" role="alert">
            <i class="bi bi-exclamation-triangle-fill"></i> There was a problem fetching the data..
        </div>`)
    }
}

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})

function validateAddress(address) {
    if(checkAddress(address) || checkbech32(address) === 'OK') {
        if(params?.address !== address) {
            window.history.pushState('', '', `?address=${address}`)
        } else {
            console.log(`${params.address} and ${address} are the same, no need to update the query param`)
        }

        switch(window.PAGE) {
            case 'transactions':
                check_transactions(address)
                break
            default:
                check_balances(address)
                break
        }

    } else if(address !== '') {
        result.innerHTML = `<div class="alert alert-warning" role="alert">
            This isn't a valid BTC/XCP address
        </div>`
    }
}

form.querySelector('.btn-balances').addEventListener('click', event => {
    const address = document.querySelector('#btcAddress').value

    event.preventDefault()

    validateAddress(address)
})

const init = async () => {
    // first, download cards
    cards = (await get_json(`https://crypt0biwan.github.io/counterparty-explorer/json/cards.json`)).data
}

init()

if(params?.address) {
    document.querySelector('#btcAddress').value = params.address

    validateAddress(params.address)
}
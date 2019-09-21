L.Control.Messagebox = L.Control.extend({
    options: {
        position: 'topright',
        timeout: 3000, 
        default_style: 'leaflet-control-messagebox'
    },

    onAdd: function (map) {
        this._container = L.DomUtil.create('div', 'leaflet-control-messagebox');
        //L.DomEvent.disableClickPropagation(this._container);
        return this._container;
    },

    show: function (message, timeout, style) {
        var elem = this._container;
        elem.innerHTML = message;
        elem.style.display = 'block';

        timeout = timeout || this.options.timeout;
        style = style || this.options.default_style;
	elem.className = this.options.default_style;

	if ( style == 'error') {
		elem.classList.add('leaflet-control-messagebox-error');
	}
	if ( style == 'warning') {
		elem.classList.add('leaflet-control-messagebox-warning');
	}
	
	if ( style == 'success') {
		elem.classList.add('leaflet-control-messagebox-success');
	}
	
        if (typeof this.timeoutID == 'number') {
            clearTimeout(this.timeoutID);
        }
        this.timeoutID = setTimeout(function () {
            elem.style.display = 'none';
        }, timeout);
    }
});

L.Map.mergeOptions({
    messagebox: false
});

L.Map.addInitHook(function () {
    if (this.options.messagebox) {
        this.messagebox = new L.Control.Messagebox();
        this.addControl(this.messagebox);
    }
});

L.control.messagebox = function (options) {
    return new L.Control.Messagebox(options);
};

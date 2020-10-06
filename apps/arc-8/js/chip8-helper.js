window.chip8Graphic = {
    _canvas: null,
    _canvasContext: null,
    _dotNetHelper: null,
    init: dotNetHelper => {
        _dotNetHelper = dotNetHelper;
        _canvas = document.getElementById('canvas');
        _canvasContext = _canvas.getContext('2d');
        chip8Graphic.refreshCanvasDimensions();

        window.addEventListener("resize", function () {
            chip8Graphic.refreshCanvasDimensions();
            _dotNetHelper.invokeMethodAsync('Resize', _canvas.width, _canvas.height);
        });

        return [_canvas.width, _canvas.height];
    },

    refreshCanvasDimensions: () => {
        _canvas.width = window.innerWidth * .8;
        _canvas.height = window.innerHeight * .8;
    },

    clearCanvas: () => {
        _canvasContext.clearRect(0, 0, _canvas.width, _canvas.height);
    },

    drawRect: (x, y, width, height, color) => {
        _canvasContext.fillStyle = color;
        _canvasContext.fillRect(x, y, width, height);
    }
};

window.chip8Loader = {
    init: dotNetHelper => {
        chip8Loader._dotNetHelper = dotNetHelper;
        chip8Loader.runCycle();
    },

    runCycle: () => {
        window.requestAnimationFrame(chip8Loader.runCycle);

        chip8Loader._dotNetHelper.invokeMethodAsync('RunCycle');
    }
};

window.chip8Sound = {
    play: () => {
        document.getElementById('sound').play();
    }
}

window.chip8Input = {
    init: dotNetHelper => {
        window.addEventListener("keydown", function (e) {
            dotNetHelper.invokeMethodAsync('HandleKeyDown', e.keyCode);
        });

        window.addEventListener("keyup", function (e) {
            dotNetHelper.invokeMethodAsync('HandleKeyUp', e.keyCode);
        });
    }            
}
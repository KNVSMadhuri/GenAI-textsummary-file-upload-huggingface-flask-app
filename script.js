var input = document.getElementById("myFile");
var output = document.getElementById("text_to_summarize");
input.addEventListener("change", function () {
    if (this.files && this.files[0]) {
        var myFile = this.files[0];
        var reader = new FileReader();

        reader.addEventListener('load', function (e) {
            output.textContent = e.target.result;
        });

        reader.readAsText(myFile);
    }
});
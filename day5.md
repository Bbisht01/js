querySelector===================

<!DOCTYPE html>
<html>
<body>

<div>
    <p>ParagraphA</p>
    <p>ParagraphB</p>
</div>
<div class="entry-content">
    <p>Paragraph1</p>
    <p>Paragraph2</p>
    <p>Paragraph3</p>
</div>
    <p>Paragraph4</p>
    <p>Paragraph5</p>

<script>
document.querySelector(".entry-content").style.backgroundColor = "red";
</script>

</body>
</html>

querySelectorAll===================

it return an array so we have to map.

<!DOCTYPE html>
<html>
<body>

<div>
    <p>ParagraphA</p>
    <p>ParagraphB</p>
 <div class="entry-content">
    <p>Paragraph1</p>
    <p>Paragraph2</p>
    <p>Paragraph3</p>
</div>
<div class="content2">
    <p>Paragraph1</p>
    <p>Paragraph2</p>
    <p>Paragraph3</p>
</div>
</div>

    <p>Paragraph4</p>
    <p>Paragraph5</p>

<script>
var ar = document.querySelectorAll(".entry-content p");
ar.forEach(el=>{
	el.style.color = "red";
})

</script>

</body>
</html>

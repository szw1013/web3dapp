<!DOCTYPE html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>JavaScript Swap Page Contents Function</title>
    <script type="text/javascript">
        var counter = 0;

        function swap(selected) {
            document.getElementById('home').style.display = 'none';
            document.getElementById('coke').style.display = 'none';
            document.getElementById('sprite').style.display = 'none';
            document.getElementById('pepper').style.display = 'none';
            document.getElementById(selected).style.display = 'block';
        }
    </script>
</head>

<body>
</body>

</html>
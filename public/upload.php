<?php
	$text = "Ваш индивидуальный текст";
	 
	// Открываем файл в нужном нам режиме. Нам же, нужно его создать и что то записать.
	$fp = fopen("file.txt", "w");//поэтому используем режим 'w'
	 
	// записываем данные в открытый файл
	fwrite($fp, $text);
	 
	//не забываем закрыть файл, это ВАЖНО
	fclose($fp);
?>

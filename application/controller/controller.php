<?php
include './debug/ChromePhp.php';
ChromePhp::log('controller.php: Hello World!');
ChromePhp::log($_SERVER);	

class Controller {

	public $load;
	public $model;

	function __construct($pageURI = null)
	{
		$this->$pageURI();
	}
    // home page function
	function home()
	{
        $data = $this->model->model3D_info();
        $this->load->view('view3DAppTest', $data);
	}

	function apiCreateTable()
	{
	  	echo "apiCreateTable";
		$data = $this->model->dbCreateTable();
		$this->load->view('viewMessage', $data);
	}
	function apiInsertData()
	{
		$data = $this->model->dbInsertData();
	   	$this->load->view('viewMessage', $data);
	}  
	function apiGetData()
	{
		$data = $this->model->dbGetData();
		$this->load->view('view3DAppData', $data);
	}

	function apiGetJson()
	{
		$this->load->view('viewJson');
	}
}
?>
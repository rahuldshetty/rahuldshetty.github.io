---
title: "PyTorch Made Easy (Part 1) Tensor Basics"
date: 2023-11-20T00:00:03+05:30
slug: pytorch-made-easy-part-1-tensor-basics
draft: false
description: A Beginner's handbook to PyTorch Core and basic Neural Nets. In this chapter, we will understand the fundaments that power PyTorch - Tensors and what are the different utilities to create them with framework.
author: Me
showToc: true
cover: https://blog.paperspace.com/content/images/size/w1050/2019/10/pytorch-logo-1.png
cover_alt: "Credit: <a class="underline underline-offset-4" href="https://blog.paperspace.com/why-use-pytorch-deep-learning-framework/">Paperspace</a> "
tags: AI/ML, Tutorial, PyTorch
---

# What is PyTorch ?

[PyTorch](https://pytorch.org/) is an open-source machine learning framework that accelerates development of deep neural networks by offering optimized way to create tensors. It is used in wide range of applications such as Computer Vision, Natural Language Processing, Audio and much more. It was originally developed by Meta AI research and now part of the Linux Foundation umbrella.

- It is written using Python, C++ and CUDA.
- Out-of-the-box support for various computations like tensor, audio processing and image processing.
- [Ecosystem Tools](https://pytorch.org/ecosystem/): Huge collection of third-party library support that extends PyTorch to support various use-cases and AI research.
- Build innovative and privary-aware AI experience for [edge](https://pytorch.org/edge) devices.

PyTorch is becoming the de-facto for many researchers and industries across the globe to build machine learning neural network models. It provides simplicity for beginner who want to get into AI and also provide flexibility for advanced users who want to build more tailored neural nets for their use-cases. 

This blog goes over basics of PyTorch along with examples, so that you (and future me) can refer.

# Setting up PyTorch

You can run PyTorch either on your local machine or use the free tier notebooks available from Google Colab or Kaggle.

1. Local Setup *(Not so Easy depending on system)*
2. Google Colab *(Easy, No setup required)*
3. Kaggle *(Easy, No setup required)*

## Local Setup

1. Before installing PyTorch, make sure you have Python installed on your systme. If you don't have one, you can directly download the installer and executables from [Python](https://www.python.org/downloads/).

    To verify the installation, run the following command in terminal/cmd to get the python interpreter.

    ```bash
    $python

    Python 3.10.0 (tags/v3.10.0:b494f59, Oct  4 2021, 19:00:18) [MSC v.1929 64 bit (AMD64)] on win32
    Type "help", "copyright", "credits" or "license" for more information.
    >>>
    ```

    *You can exit the interpreter by pressing Ctrl + Z and Enter.*

2. Now go to PyTorch [Setup](https://pytorch.org/get-started/locally/) and select the type of build, operating system, build tool and CUDA/CPU version of your system. This will generate a command that you can paste in your terminal to install the package.

    E.g:
    ```bash
    pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
    ```

    ![PyTorch Setup](https://discuss.pytorch.org/uploads/default/original/3X/6/b/6b3ebb89944b7a6207dd223f3426c96763095af5.png)

3. (Optional) If you already have IDE editor or notebook installed, then you can skip this part. But for any experimentaiton, it is easier to do your work on a IDE editor called notebook that lets you track and easily update experiements from your previous run in the interpreter. These are special purpose editor made for scientific experimentations.

    You can install and run jupyter lab notebook simply by running the following command:
    ```bash
    pip install jupyterlab
    jupyter lab
    ```

    This will start the notebook server and launch the notebook program in your browser. 

    ![Jupyter Lab](https://ipython-books.github.io/pages/chapter03_notebook/06_jupyterlab_files/home.png)


## Google Colaboratory

Google Colaboratory (Colab for short) offers CPU/GPU/TPU based notebook instances for running scientific computations like JupterLab. The notebook is persisted in your Google Drive, so that you don't have to worry about losing the data. It offers a subscription for those who want to run intensive training/computation, but for the purpose of this tutorial the free tier is more than enough.

Visit Google Colaboratory: https://colab.research.google.com/

![Google Colab](https://s.yimg.com/ny/api/res/1.2/zaN_vbvPG5ESbXjuVSXrTQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTA-/https://media.zenfs.com/en/techcrunch_for_finance_733/fa12e76f8b78c3499dd69289b7472a50)

## Kaggle

Kaggle is another great learning platform that provides a community for data scientists and machine learning experts who want to showcase their skills. They have regular competitions from around the globe (even with rewards), provide hardware tier for running and training with notebooks, explore datasets from the community and discuss/learn with fellow experts from across the globe.

Visit Kaggle: https://www.kaggle.com/

![Kaggle](https://images.datacamp.com/image/upload/c_scale,w_750/v1646744081/competition_filter_pbo6gf.png)

# Tensor Basics

Tensors are data structures designed for performing high-speed mathematical & scientific computations on a multi-dimensional data. In nature, they are similar to Arrays and Matrices in programming languages but they provide abstraction that let you perform high speed calculations using specialized hardwares other than CPUs like GPU & TPUs. 

If you've worked with Numpy's ndarry then you will find a lot of resemblace in how both represent the data in memory and its operations. But in addition, Torch offers automated differentiation, that let's you perform backpropogration to build and train neural networks. More on this later!

```python
import time
import numpy as np

import torch
import torch.nn as nn
from torch.nn import functional as F

print("Numpy Version:", np.__version__)         # Numpy Version: 1.23.5
print("Torch Version:", torch.__version__)      # Torch Version: 2.1.0+cu118
```

## Creating Tensors

You can use the *torch.tensor* method to wrap python list objects to create a tensor object.

```python
array = torch.tensor([7, 2, 9, 10])
print(array) # tensor([ 7,  2,  9, 10])

matrix = torch.tensor([[5.2, 3.0, 4.5],[9.1, 0.1, 0.3]], dtype=torch.double)
print(matrix)
# tensor([[5.2000, 3.0000, 4.5000],
#         [9.1000, 0.1000, 0.3000]], dtype=torch.float64)

tensor_3d = torch.tensor([
    [[1, 2], [4, 3], [7, 4]],
    [[2, 8], [9, 6], [7, 5]],
    [[1, 0], [3, -9], [0, 2]],
    [[9, 7], [6, 2], [9, 8]]
])
print(tensor_3d)
# tensor([[[ 1,  2],
#          [ 4,  3],
#          [ 7,  4]],
#         [[ 2,  8],
#          [ 9,  6],
# ...
```

To find shape of tensor object, you can use the *.shape()* method.

```python
print(tensor_3d.shape) # torch.Size([4, 3, 2])
```

![Tensor Representation](https://i.stack.imgur.com/NWTQH.png)

### torch.empty

Creates an empty tensor with specified shape. This method doesn't initialize any tensor values, the values you get in the object are random data that is available in the memory.

```python
x = torch.empty(2, 1)
x 
# tensor([[-7.1395e+34],
# [ 3.1271e-41]])
```

### Random Tensors & Seeding

Torch provides a convenient way to create tensors with random value. You can define the manual seeding that goes behind for generating the random value. 

Always a rule of thumb, make sure to set the manual seed before generating random value. This is important when you are dealing with training large neural networks. 

```python
torch.manual_seed(1729)
random1 = torch.rand(1, 1)
print(random1) # tensor([[0.3126]])

random2 = torch.rand(1, 1)
print(random2) # tensor([[0.3791]])

torch.manual_seed(1729)
random3 = torch.rand(1, 1)
print(random3) # tensor([[0.3126]])
```

[torch.rand](https://pytorch.org/docs/stable/generated/torch.rand.html#torch.rand) generates random floating point numbers. If you want to generate random integers then you can use [torch.randint](https://pytorch.org/docs/stable/generated/torch.randint.html).

```python
randint = torch.randint(-100, 100, (6, ))
randint # tensor([ 43, -15, -73, -64, -91,  64])
```

### torch.zeros

Creates a tensor filled with the scalar value 0., with the defined shape. 

```python
x = torch.zeros(2, 3)
x 
# tensor([[0., 0., 0.],
#         [0., 0., 0.]])
```

### torch.ones

Creates a tensor filled with the scalar value 1., with the defined shape. 

```python
x = torch.zeros(1, 2)
x 
# tensor([[1., 1.]])
```

### torch.eye

Creates an tensor similar to an identity matrix, where all the principal diagonal elements are 1 and zero elsewhere.

```python
x = torch.zeros(1, 2)
eye = torch.eye(3)
eye
# tensor([[1., 0., 0.],
#         [0., 1., 0.],
#         [0., 0., 1.]])
```

### torch.arange

This method is similar to Python's range. It generates a list of values from *start* to *end*, with each differing by a *step* value.

```python
arange = torch.arange(start=0, end=6, step=2)
arange
# tensor([0, 2, 4])
```


### torch.linspace

Created an 1D tensor array of size *steps*, whose values are evenly spaced from *start* to *end* (inclusive).

```python
linspace = torch.linspace(0, 100, steps = 5)
linspace
# tensor([  0.,  25.,  50.,  75., 100.])
```

### torch.x_like

Takes a tensor as input and returns tensor with same shape but replaced with corresponding scalar values as defined by the function.

Different like of *_like* methods:
- torch.zeros_like
- torch.ones_like
- torch.empty_like
- torch.rand_like
- torch.randint_like


```python
a = torch.empty((2, 3), dtype=torch.int64)
ones_like = torch.ones_like(a)
ones_like
# tensor([[1, 1, 1],
#        [1, 1, 1]])
```

> In the next part of this blogpost series, you will learn the mathematical concepts and operations that you can do with Tensor. We will also see how to build your very own Neural Network.

# Reference & Links

- Torch Tutorials (Official): https://pytorch.org/tutorials/
- Notebook (Google Collab): https://colab.research.google.com/drive/1Ck7M7SS7vrMlBcok4nsQPEUmijZjjryL?usp=sharing

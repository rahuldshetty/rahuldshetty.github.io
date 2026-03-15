---
title: "Create Binary Search Tree (BST) in Python 3"
date: 2021-01-03T22:00:03+05:30
slug: create-binary-search-tree-bst-in-python-3
draft: false
description: Tutorial on building Binary Search Tree Data Structure using Pure Python.
author: Me
showToc: true
cover: https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg
---

# What are Binary Search Trees?

This will by my first topic on which I will be showing you guys on how to implement a binary search tree datastructre(DS) and go through the basic fundamentals. 

So a Binary Search Tree (BST) is a type of graph data structrue where you have many nodes arranged in a reversed tree fashion. Each node starting from the top (which is called as root node) is split into two sub trees. This holds good for all Binary Trees but when it comes to BST there is an addtional property which the tree must hold. This property basically states that "values of the nodes on the left subtree much be smaller when compared to the root value and values of the nodes on the right subtree should be larger when compared to the root value.

Node are the basic units for a BST. In our case, each node holds a value and contains reference to left subtree and right subtree.

## What about duplicate values?
Well dependening on your use case you can choose to retain or drop the duplicate entry. If you are going to keep them then there are two easy solution. One is to insert this new record on either side of the tree maintaining the BST rule. But this implementation could be tedious and search will require little more effort to find all the entries. Better way to do this is by storing a count/frequency variable for each of node and increase is as and when the nodes are inserted. For the existing node you just find the node and update the count value.

##  What are the operations that can be performed on BST?
A basic implementation of BST can be used to perform the following operations:
1) Insert: We add a new node into the BST. Duplicates are ignored.
2) Delete: Removing a node from the BST. Involes Tree re-organization. 
3) Search: Checking if a value exists in any of nodes in the BST.
4) Traverse: Visiting each and every node of the BST in some fashion. In-order traversal is common used technique which will print out the elements of the tree in sorted order. There are also other traversal techniques like Pre-Order and Post-Order.

##  Where can I make use of this?
There are the some of the typical use case where people tend to go with BST:
1) Sorting: Maintaing a sorted stream of data.
2) Other Data Structure Implementation: TreeMap and TreeSet DataStructure in Java uses BST internally.

## Dark side of the BST?
Let us consider a scenario where a BST is created in such a way that it keeps growing at one sides. There is more general term for this called Skew. If the nodes are inserted to every node's left subtree and until it forms this linear chained nodes, this type of BST is said to be left-skewed. A search operation will have to go through each and every N nodes of this tree to find the value so the worst case time complexity is said to be O(n). Similar can happen while adding and deleting the nodes.

## How to improve BST?
You might have thought by now, if the problem with BST occurs when it keeps adding the nodes to only one side then if we could split up or do some operation that would re-organize the tree. This type of data structure is called Self-Balancing BST. I might be writing about them in the future.

# Code

First and foremast part of creating this BST is to create the basic units, which is Node. Each node stores a value and contains references to left and right subtrees. 

<script src="https://gist.github.com/rahuldshetty/143b874030eac5e850b355aee509db2b.js"></script>

Then we can create a BST data structure with all the operations. We are using class to define the template. Each object of this class will contain a private member called root which is only accessible within the member functions. Each of the operations use a recursive logic to perform the action. So for this we made use of nested functions which will handle the recursive calls. 

<script src="https://gist.github.com/rahuldshetty/e529ae147fad1b5493d95795f1aa7af0.js"></script>

Just to test out if the implementation is right or wrong, I have created this sample file which will create an empty BST and does all the operations on the Tree. Notice that for In-Order traversal, the path printed by tree contains node value in sorted manner.

<script src="https://gist.github.com/rahuldshetty/4b5d84647b3c94a5d77f26a44676019c.js"></script>

#  References
I found these links helpful for writing this blog:

[BST Basics](https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/)

[BST Delete](https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/)

[Handling Duplicates in BST](https://www.geeksforgeeks.org/how-to-handle-duplicates-in-binary-search-tree/)

[Applications](https://en.wikipedia.org/wiki/Binary_search_tree#Examples_of_applications)

